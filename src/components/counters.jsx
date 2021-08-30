import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор миниалиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };
  const handleReset = () => setCounters(initialState);

  const handleIncrement = (counterId) => {
    const newCounters = [...counters];
    newCounters.find((c) => c.id == counterId).value++;
    setCounters(newCounters);
  };

  const handleDecrement = (counterId) => {
    const newCounters = [...counters];
    const counter = newCounters.find((c) => c.id == counterId);
    if (counter.value > 0) counter.value--;
    setCounters(newCounters);
  };

  return (
    <div>
      <button onClick={handleReset} className="btn-primary btn-small m-2">
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
