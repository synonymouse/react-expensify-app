import moment from "moment";
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from "../../actions/filters";

test("should generate set start action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should generate set end action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test("SET_TEXT_FILTER", () => {
  const action = setTextFilter("asffasf");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "asffasf"
  });
});

test("SET_TEXT_FILTER default values", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("SORT_BY_AMOUNT", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});

test("SORT_BY_DATE", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});
