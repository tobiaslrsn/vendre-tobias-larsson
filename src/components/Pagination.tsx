import { IStaff } from "../models/IStaff";

import style from "./styles/pagination.module.scss";

interface IPagination {
  liftPagination(pagination: number): void;
  pagination: number;
  setPagination(pagination: number): void;
  staffList: IStaff[];
}

export const Pagination = (props: IPagination) => {
  const decrement = () => {
    let decrement = props.pagination - 1;

    if (props.pagination > 0) {
      props.liftPagination(decrement);
    }

    if (props.pagination === 1) {
      props.setPagination(1);
    }
  };

  const increment = () => {
    let incrementCount = props.pagination + 1;

    if (props.pagination < props.staffList.length - 1) {
      props.liftPagination(incrementCount);
    }

    if (props.pagination === 2) {
      props.setPagination(2);
    }
  };
  return (
    <>
      <button
        className={style["pagination-btn"]}
        onClick={() => {
          decrement();
        }}
      >
        1
      </button>
      <button
        className={style["pagination-btn"]}
        onClick={() => {
          increment();
        }}
      >
        2
      </button>
    </>
  );
};
