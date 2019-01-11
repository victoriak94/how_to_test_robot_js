const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");

test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  const robot1 = newRobot(true, true, false);
  expect(station(robot1)).toEqual(1);
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  const robot2 = newRobot(true, false, true);
  expect(station(robot2)).toEqual(2);
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  const robot3 = newRobot(true, false, false);
  expect(station(robot3)).toEqual(3);
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  const robot4 = newRobot(false, false, false);
  expect(station(robot4)).toEqual(4);
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  const robot5 = newRobot(false, false, false);
  robot5.todos = [];
  expect(prioritizeTasks(robot5)).toEqual(-1)
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  const robot6 = newRobot(true, false, false);
  robot6.todos = [1, 2, 3, 4, 5];
  expect(prioritizeTasks(robot6)).toEqual(5);
});

test('test_workday_on_day_off_returns_false', () => {
  const robot7 = newRobot(false, false, true);
  robot7.dayOff = 'Jan11';
  let today = 'Jan11';
  expect(isWorkday(robot7, today)).toEqual(false);
});

test('test_workday_not_day_off_returns_true', () => {
  const robot8 = newRobot(false, true, true);
  robot8.dayOff = 'Jan11';
  let today = 'Jan12';
  expect(isWorkday(robot8, today)).toEqual(true);
});
