import moment from 'moment';

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";
  const words = name.split(" ");
  let initials = "";
  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }
  return initials.toUpperCase();
};

export const addThousandsSeparator = (num) => {
  if (num == null || isNaN(num)) return "";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Expense bar chart data (monthly granularity)
export const prepareExpenseBarChartData = (data = []) => {
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MMM"),  // for X axis label
    amount: item?.amount,
    category: item?.category,
  }));

  return chartData;
};

// UPDATED Income bar chart data: aggregate amount by source
export const prepareIncomeBarChartData = (data = []) => {
  if (!data.length) return [];

  // Group and sum amounts by source
  const grouped = data.reduce((acc, item) => {
    const key = item.source || "Unknown";
    acc[key] = (acc[key] || 0) + Number(item.amount);
    return acc;
  }, {});

  // Convert to array suitable for bar chart
  return Object.entries(grouped).map(([category, amount]) => ({
    category,
    amount,
  }));
};

// Expense line chart data (monthly granularity)
export const prepareExpenseLineChartData = (data = []) => {
  const sortedData = [...data].sort((a,b) => new Date(a.date) - new Date(b.date));

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format('Do MMM'),
    amount: item?.amount,
  }));

  return chartData;
};
