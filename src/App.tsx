import { useEffect, useState } from "react";
import style from "./App.module.scss";
import { IStaff } from "./models/IStaff";
import { Loader } from "./components/Loader";
import { StaffRender } from "./components/StaffRender";
import { Pagination } from "./components/Pagination";

import { staffListPagination } from "./services/staffList.service";

function App() {
  const [staffList, setStaffList] = useState<IStaff[]>([]);
  const [pagination, setPagination] = useState(1);
  const [ifLoading, setIfLoading] = useState(false);
  const [ifError, setIfError] = useState(false);

  const liftPagination = (pagination: number) => {
    setPagination(pagination);
  };

  useEffect(() => {
    setIfLoading(true);

    staffListPagination(pagination)
      .then((response) => {
        setStaffList(response.data);
        setIfError(false);
      })
      .catch((error) => {
        setIfError(true);
      })
      .finally(() => {
        setIfLoading(false);
      });
  }, [pagination]);

  return (
    <>
      <div className={style.container}>
        {staffList.map((staffList, idx) => {
          if (ifLoading) {
            return <Loader />;
          }

          if (ifError) {
            return <p>Something went wrong</p>;
          }

          return (
            <>
              <div
                key={staffList.id}
                className={style["fade-graph-item"]}
                style={{ animationDelay: `${75 * idx}ms` }}
              >
                <StaffRender staffList={staffList}></StaffRender>
              </div>
            </>
          );
        })}
      </div>

      <div className={style.wrapper}>
        <Pagination
          liftPagination={liftPagination}
          pagination={pagination}
          setPagination={setPagination}
          staffList={staffList}
        ></Pagination>
      </div>
    </>
  );
}

export default App;
