import { useDispatch, useSelector } from 'react-redux';
import { CalendarTable } from './CalendarTable/CalendarTable';

import { getDate } from 'redux/currentDate/selector';
import { setDate } from 'redux/currentDate/curentDateSlice';
import { DayCalendarHead } from 'components/DayCalendarHead/DayCalendarHead';
import { selectAllTasks } from 'redux/task/selectors';
import { useEffect } from 'react';
import { fetchAllTasks } from 'redux/task/operations';

const ChoosedMonth = () => {
  const dispatch = useDispatch();
  const date = new Date(useSelector(getDate));
  const tasks = useSelector(selectAllTasks);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const handleSetDate = newDate => {
    dispatch(setDate(newDate.toString()));
  };
  useEffect(() => {
    const dataDay = {
      month,
      day,
      year,
    };
    dispatch(fetchAllTasks(dataDay));
  }, [month, day, year, dispatch]);

  return (
    <div>
      <DayCalendarHead date={date} setDate={handleSetDate} />
      <CalendarTable date={date} setDate={handleSetDate} tasks={tasks} />
    </div>
  );
};

export default ChoosedMonth;