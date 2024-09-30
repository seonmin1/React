import { useState } from "react";
import Coffee from "./Coffee";

const Cafe = () => {
  const [coffee, setCoffee] = useState({
    americano: { amount: 0, price: 1000 },
    latte: { amount: 0, price: 1500 },
    ade: { amount: 0, price: 2000 },
  });

  const changeAmericano = () => {
    setCoffee((prev) => {
      return {
        ...prev,
        americano: { amount: prev.americano.amount + 1, price: 1000 },
      };
    });
  };

  const changeLatte = () => {
    setCoffee((prev) => {
      return {
        ...prev,
        latte: { amount: prev.latte.amount + 1, price: 1500 },
      };
    });
  };

  const changeAde = () => {
    setCoffee((prev) => {
      return {
        ...prev,
        ade: { amount: prev.ade.amount + 1, price: 2000 },
      };
    });
  };

  return (
    <div>
      <Coffee
        click={changeAmericano}
        coffeeName="아메리카노"
        coffeeAmount={coffee.americano.amount}
      />
      <Coffee
        click={changeLatte}
        coffeeName="라떼"
        coffeeAmount={coffee.latte.amount}
      />
      <Coffee
        click={changeAde}
        coffeeName="에이드"
        coffeeAmount={coffee.ade.amount}
      />
      <div>
        <span>
          총 갯수:
          {coffee.americano.amount + coffee.latte.amount + coffee.ade.amount}
        </span>

        <span>
          총 가격:
          {coffee.americano.amount * coffee.americano.price +
            coffee.latte.amount * coffee.latte.price +
            coffee.ade.amount * coffee.ade.price}
        </span>
      </div>
    </div>
  );
};

export default Cafe;
