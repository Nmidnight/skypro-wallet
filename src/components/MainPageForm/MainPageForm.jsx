import { useState } from "react";
import { useAuth } from "../../context/AuthContext/useAuth";
import { createTransaction } from "../../services/TransactionsApi";
import { categoryValues, toApiDate } from "../../utils/transactionsFormatters";
import food from "../../assets/icon-food.svg?react";
import car from "../../assets/icon-car.svg?react";
import house from "../../assets/icon-house.svg?react";
import teacher from "../../assets/icon-teacher.svg?react";
import other from "../../assets/icon-other.svg?react";
import gameboy from "../../assets/icon-gameboy.svg?react";
import {
  CategoriesBox,
  CategoryButton,
  ContentContainer,
  ContentLabel,
  FormButton,
  FormInput,
  MainFormcontainer,
  MainFormTitle,
} from "./MainPageForm.styled";

export function MainPageForm({ onTransactionCreated }) {
  const { token } = useAuth();

  const categories = [
    { name: "Еда", icon: food },
    { name: "Транспорт", icon: car },
    { name: "Жилье", icon: house },
    { name: "Развлечения", icon: gameboy },
    { name: "Образование", icon: teacher },
    { name: "Другое", icon: other },
  ];

  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (name, value) => {
    let error = "";

    if (name === "description") {
      const trimmed = value.trim();

      if (!trimmed) {
        error = "Введите описание";
      } else if (trimmed.length < 4) {
        error = "Минимум 4 символа";
      } else if (trimmed.length > 50) {
        error = "Слишком длинное описание";
      }
    }

    if (name === "date") {
      if (!value) {
        error = "Введите дату";
      } else {
        const dateRegex =
          /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(20\d{2})$/;

        if (!dateRegex.test(value)) {
          error = "Формат даты: ДД.ММ.ГГГГ";
        } else {
          const [day, month, year] = value.split(".");
          const dateObj = new Date(Number(year), Number(month) - 1, Number(day));

          if (
            dateObj.getDate() !== Number(day) ||
            dateObj.getMonth() + 1 !== Number(month)
          ) {
            error = "Некорректная дата";
          }
        }
      }
    }

    if (name === "amount") {
      if (!value) {
        error = "Введите сумму";
      } else if (!/^\d+$/.test(value)) {
        error = "Введите целое число";
      } else if (Number(value) <= 0) {
        error = "Сумма должна быть больше 0";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const isFormValid =
    description &&
    selectedCategory &&
    date &&
    amount &&
    !errors.description &&
    !errors.date &&
    !errors.amount &&
    !isSubmitting;

  const resetForm = () => {
    setDescription("");
    setDate("");
    setAmount("");
    setSelectedCategory(null);
    setErrors({});
    setTouched({});
  };

  const markAllTouched = () => {
    setTouched({
      description: true,
      date: true,
      amount: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validate("description", description);
    validate("date", date);
    validate("amount", amount);
    markAllTouched();

    const sum = Number(amount);
    const category = categoryValues[selectedCategory];

    if (!isFormValid || !category || !Number.isInteger(sum) || sum <= 0) {
      return;
    }

    setSubmitError("");
    setIsSubmitting(true);

    try {
      await createTransaction(token, {
        description: description.trim(),
        category,
        date: toApiDate(date),
        sum,
      });
      resetForm();
      await onTransactionCreated?.();
    } catch (err) {
      setSubmitError(err.message || "Не удалось добавить расход");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainFormcontainer onSubmit={handleSubmit}>
      <MainFormTitle>Новый расход</MainFormTitle>
      <ContentContainer>
        <ContentLabel>
          Описание
          {touched.description && errors.description && (
            <span style={{ color: "#F25050" }}>*</span>
          )}
        </ContentLabel>

        <FormInput
          type="text"
          placeholder="Введите описание"
          value={description}
          onChange={(e) => {
            const value = e.target.value;
            setDescription(value);
            validate("description", value);
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, description: true }))}
          $errors={touched.description && errors.description}
          $success={touched.description && !errors.description && description}
        />
      </ContentContainer>
      <ContentContainer>
        <ContentLabel>Категория</ContentLabel>
        <CategoriesBox>
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.name;
            return (
              <CategoryButton
                type="button"
                key={category.name}
                selected={selectedCategory === category.name}
                onClick={() => setSelectedCategory(category.name)}
              >
                <Icon
                  width={14}
                  height={14}
                  fill={isSelected ? "#7334ea" : "#000"}
                />
                {category.name}
              </CategoryButton>
            );
          })}
        </CategoriesBox>
      </ContentContainer>
      <ContentContainer>
        <ContentLabel>
          Дата
          {touched.date && errors.date && (
            <span style={{ color: "#F25050" }}>*</span>
          )}
        </ContentLabel>
        <FormInput
          type="text"
          placeholder="Введите дату"
          value={date}
          onChange={(e) => {
            const value = e.target.value;
            setDate(value);
            validate("date", value);
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, date: true }))}
          $errors={touched.date && errors.date}
          $success={touched.date && !errors.date && date}
        />
      </ContentContainer>
      <ContentContainer>
        <ContentLabel>
          Сумма
          {touched.amount && errors.amount && (
            <span style={{ color: "#F25050" }}>*</span>
          )}
        </ContentLabel>
        <FormInput
          type="text"
          placeholder="Введите сумму"
          value={amount}
          onChange={(e) => {
            const value = e.target.value;
            setAmount(value);
            validate("amount", value);
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, amount: true }))}
          $errors={touched.amount && errors.amount}
          $success={touched.amount && !errors.amount && amount}
        />
      </ContentContainer>
      {submitError && (
        <span style={{ color: "#F25050", fontSize: "12px" }}>{submitError}</span>
      )}
      <FormButton type="submit" disabled={!isFormValid || isSubmitting}>
        {isSubmitting ? "Добавление..." : "Добавить новый расход"}
      </FormButton>
    </MainFormcontainer>
  );
}
