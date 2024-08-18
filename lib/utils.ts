import { Project } from "@/lib/types";

export function isValidHttpUrl(str: string) {
  let url;

  try {
    url = new URL(str);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

export function formatDateRange(startDate: string, endDate: string) {
  const monthNames = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];

  function formatDate(dateStr: string) {
    const [year, month] = dateStr.split("-");
    const monthIndex = parseInt(month, 10) - 1;
    return `${monthNames[monthIndex]} ${year}`;
  }

  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  // Check if the startDate and endDate are the same
  if (startDate === endDate) {
    return formattedStartDate;
  } else {
    return `${formattedStartDate} - ${formattedEndDate}`;
  }
}

