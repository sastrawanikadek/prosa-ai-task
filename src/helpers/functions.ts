export const stylex = (...style: React.CSSProperties[]): React.CSSProperties =>
  Object.assign({} as React.CSSProperties, ...style);

export const dataToTask = (
  data: TaskInterface[]
): { [key: string]: TaskInterface } => {
  return data.reduce((result, value) => {
    result[value.issue_id] = Object.assign({}, value);
    return result;
  }, {});
};

export const dataToBoard = (
  data: BoardInterface[]
): { [key: string]: BoardInterface } => {
  return data.reduce((result, value) => {
    result[value.board_id] = Object.assign({}, value);
    return result;
  }, {});
};

export const JoinEachFirstLetter = (source: string): string => {
  return source
    .split(" ")
    .map((v) => v[0])
    .join("");
};

export const getDuration = (date_str1: string, date_str2: string): number => {
  const date1 = new Date(date_str1);
  const date2 = new Date(date_str2);
  const differentDays = Math.round(
    Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24)
  );
  return differentDays;
};

export const getUniqueTags = (data: TaskInterface[]): string[] => {
  const uniqueTags = [];

  data.forEach((task) => {
    task.tags.forEach((tag) => {
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag);
      }
    });
  });

  return uniqueTags;
};
