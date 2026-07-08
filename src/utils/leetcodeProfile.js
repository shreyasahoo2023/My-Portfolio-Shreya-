export const FALLBACK_LEETCODE_PROFILE = {
  status: 'success',
  username: 'Shreya145-_',
  displayName: 'Shreya145-_',
  avatar: 'https://assets.leetcode.com/users/Shreya145-_/avatar_1775446405.png',
  ranking: 364137,
  following: 0,
  followers: 0,
  contestRating: 1414,
  contestGlobalRanking: '677,405/874,830',
  contestsAttended: 1,
  topPercent: 77.75,
  totalSolved: 357,
  totalQuestions: 3985,
  acceptanceRate: 84.41,
  easySolved: 120,
  easyTotal: 953,
  mediumSolved: 189,
  mediumTotal: 2081,
  hardSolved: 48,
  hardTotal: 951,
  badgesCount: 6,
  recentBadge: '100 Days Badge 2026',
  totalSubmissionsPastYear: 499,
  totalActiveDays: 177,
  maxStreak: 72,
  currentStreak: 72,
  submissionCalendar: null,
};

const firstDefined = (...values) =>
  values.find((value) => value !== undefined && value !== null && value !== '');

const toNumber = (value, fallback = 0) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const hasCalendarData = (calendar) => {
  return Boolean(calendar && Object.keys(calendar).length > 0);
};

export const normalizeLeetCodeProfile = (source = {}) => {
  const badges = Array.isArray(source.badges)
    ? source.badges.length
    : undefined;
  const submissionCalendar = firstDefined(
    source.submissionCalendar,
    source.submission_calendar,
    FALLBACK_LEETCODE_PROFILE.submissionCalendar,
  );

  return {
    ...FALLBACK_LEETCODE_PROFILE,
    ...source,
    username: firstDefined(
      source.username,
      source.userName,
      source.name,
      FALLBACK_LEETCODE_PROFILE.username,
    ),
    displayName: firstDefined(
      source.displayName,
      source.name,
      source.userName,
      source.username,
      FALLBACK_LEETCODE_PROFILE.displayName,
    ),
    avatar: firstDefined(
      source.avatar,
      source.profile?.avatar,
      FALLBACK_LEETCODE_PROFILE.avatar,
    ),
    ranking: toNumber(
      firstDefined(
        source.ranking,
        source.globalRanking,
        FALLBACK_LEETCODE_PROFILE.ranking,
      ),
      FALLBACK_LEETCODE_PROFILE.ranking,
    ),
    following: toNumber(
      firstDefined(source.following, FALLBACK_LEETCODE_PROFILE.following),
      FALLBACK_LEETCODE_PROFILE.following,
    ),
    followers: toNumber(
      firstDefined(source.followers, FALLBACK_LEETCODE_PROFILE.followers),
      FALLBACK_LEETCODE_PROFILE.followers,
    ),
    contestRating: toNumber(
      firstDefined(
        source.contestRating,
        source.rating,
        FALLBACK_LEETCODE_PROFILE.contestRating,
      ),
      FALLBACK_LEETCODE_PROFILE.contestRating,
    ),
    contestGlobalRanking: firstDefined(
      source.contestGlobalRanking,
      source.contestRanking,
      FALLBACK_LEETCODE_PROFILE.contestGlobalRanking,
    ),
    contestsAttended: toNumber(
      firstDefined(
        source.contestsAttended,
        source.attended,
        FALLBACK_LEETCODE_PROFILE.contestsAttended,
      ),
      FALLBACK_LEETCODE_PROFILE.contestsAttended,
    ),
    topPercent: toNumber(
      firstDefined(
        source.topPercent,
        source.contestTopPercent,
        FALLBACK_LEETCODE_PROFILE.topPercent,
      ),
      FALLBACK_LEETCODE_PROFILE.topPercent,
    ),
    totalSolved: toNumber(
      firstDefined(source.totalSolved, FALLBACK_LEETCODE_PROFILE.totalSolved),
      FALLBACK_LEETCODE_PROFILE.totalSolved,
    ),
    totalQuestions: toNumber(
      firstDefined(
        source.totalQuestions,
        FALLBACK_LEETCODE_PROFILE.totalQuestions,
      ),
      FALLBACK_LEETCODE_PROFILE.totalQuestions,
    ),
    acceptanceRate: toNumber(
      firstDefined(
        source.acceptanceRate,
        FALLBACK_LEETCODE_PROFILE.acceptanceRate,
      ),
      FALLBACK_LEETCODE_PROFILE.acceptanceRate,
    ),
    easySolved: toNumber(
      firstDefined(source.easySolved, FALLBACK_LEETCODE_PROFILE.easySolved),
      FALLBACK_LEETCODE_PROFILE.easySolved,
    ),
    easyTotal: toNumber(
      firstDefined(
        source.totalEasy,
        source.easyTotal,
        FALLBACK_LEETCODE_PROFILE.easyTotal,
      ),
      FALLBACK_LEETCODE_PROFILE.easyTotal,
    ),
    mediumSolved: toNumber(
      firstDefined(source.mediumSolved, FALLBACK_LEETCODE_PROFILE.mediumSolved),
      FALLBACK_LEETCODE_PROFILE.mediumSolved,
    ),
    mediumTotal: toNumber(
      firstDefined(
        source.totalMedium,
        source.mediumTotal,
        FALLBACK_LEETCODE_PROFILE.mediumTotal,
      ),
      FALLBACK_LEETCODE_PROFILE.mediumTotal,
    ),
    hardSolved: toNumber(
      firstDefined(source.hardSolved, FALLBACK_LEETCODE_PROFILE.hardSolved),
      FALLBACK_LEETCODE_PROFILE.hardSolved,
    ),
    hardTotal: toNumber(
      firstDefined(
        source.totalHard,
        source.hardTotal,
        FALLBACK_LEETCODE_PROFILE.hardTotal,
      ),
      FALLBACK_LEETCODE_PROFILE.hardTotal,
    ),
    badgesCount: toNumber(
      firstDefined(
        badges,
        source.badgesCount,
        FALLBACK_LEETCODE_PROFILE.badgesCount,
      ),
      FALLBACK_LEETCODE_PROFILE.badgesCount,
    ),
    recentBadge: firstDefined(
      source.recentBadge,
      source.mostRecentBadge,
      FALLBACK_LEETCODE_PROFILE.recentBadge,
    ),
    totalSubmissionsPastYear: toNumber(
      firstDefined(
        source.totalSubmissionsPastYear,
        FALLBACK_LEETCODE_PROFILE.totalSubmissionsPastYear,
      ),
      FALLBACK_LEETCODE_PROFILE.totalSubmissionsPastYear,
    ),
    totalActiveDays: toNumber(
      firstDefined(
        source.totalActiveDays,
        FALLBACK_LEETCODE_PROFILE.totalActiveDays,
      ),
      FALLBACK_LEETCODE_PROFILE.totalActiveDays,
    ),
    maxStreak: toNumber(
      firstDefined(source.maxStreak, FALLBACK_LEETCODE_PROFILE.maxStreak),
      FALLBACK_LEETCODE_PROFILE.maxStreak,
    ),
    currentStreak: toNumber(
      firstDefined(
        source.currentStreak,
        FALLBACK_LEETCODE_PROFILE.currentStreak,
      ),
      FALLBACK_LEETCODE_PROFILE.currentStreak,
    ),
    submissionCalendar,
  };
};

const toDate = (key) => {
  const numeric = Number(key);

  if (Number.isFinite(numeric)) {
    return new Date(numeric < 1e12 ? numeric * 1000 : numeric);
  }

  return new Date(key);
};

const toDayKey = (date) => date.toISOString().split('T')[0];

const createSeededRandom = (seedText) => {
  let seed = 0;

  for (let index = 0; index < seedText.length; index += 1) {
    seed = (seed * 31 + seedText.charCodeAt(index)) >>> 0;
  }

  return () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
};

export const buildSnapshotCalendar = (stats = FALLBACK_LEETCODE_PROFILE) => {
  const totalActiveDays =
    stats.totalActiveDays || FALLBACK_LEETCODE_PROFILE.totalActiveDays;
  const totalSubmissions =
    stats.totalSubmissionsPastYear ||
    FALLBACK_LEETCODE_PROFILE.totalSubmissionsPastYear;
  const maxStreak = stats.maxStreak || FALLBACK_LEETCODE_PROFILE.maxStreak;
  const currentStreak =
    stats.currentStreak || FALLBACK_LEETCODE_PROFILE.currentStreak;
  const now = new Date();
  const start = new Date(now);
  start.setDate(start.getDate() - 364);
  start.setHours(0, 0, 0, 0);

  const random = createSeededRandom(
    `${stats.username || stats.displayName || 'leetcode'}-${totalSubmissions}-${totalActiveDays}`,
  );
  const calendar = {};

  for (let dayIndex = 0; dayIndex < 365; dayIndex += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + dayIndex);
    const key = date.toISOString().split('T')[0];
    calendar[key] = 0;
  }

  const activeDays = new Set();

  for (let offset = 0; offset < Math.max(1, currentStreak); offset += 1) {
    const date = new Date(now);
    date.setDate(date.getDate() - offset);
    date.setHours(0, 0, 0, 0);
    activeDays.add(date.toISOString().split('T')[0]);
  }

  while (activeDays.size < totalActiveDays) {
    const offset = Math.floor(random() * 365);
    const date = new Date(start);
    date.setDate(start.getDate() + offset);
    activeDays.add(date.toISOString().split('T')[0]);
  }

  const activeDayList = Array.from(activeDays).sort();
  let remaining = totalSubmissions;

  activeDayList.forEach((day, index) => {
    const daysLeft = activeDayList.length - index - 1;
    const minForThisDay = 1;
    const maxForThisDay = Math.max(
      minForThisDay,
      Math.min(10, remaining - daysLeft),
    );
    const weight = 0.35 + random() * 0.65;
    const count = Math.max(
      minForThisDay,
      Math.min(maxForThisDay, Math.round(1 + weight * (maxForThisDay - 1))),
    );
    calendar[day] = count;
    remaining -= count;
  });

  if (remaining !== 0 && activeDayList.length > 0) {
    const lastDay = activeDayList[activeDayList.length - 1];
    calendar[lastDay] = Math.max(1, (calendar[lastDay] || 1) + remaining);
  }

  if (maxStreak > 0) {
    const streakStart = new Date(now);
    streakStart.setDate(streakStart.getDate() - maxStreak + 1);
    streakStart.setHours(0, 0, 0, 0);

    for (let offset = 0; offset < maxStreak; offset += 1) {
      const date = new Date(streakStart);
      date.setDate(streakStart.getDate() + offset);
      const key = date.toISOString().split('T')[0];
      calendar[key] = Math.max(
        calendar[key] || 0,
        offset === maxStreak - 1 ? 3 : 1,
      );
    }
  }

  return calendar;
};

export const getCalendarEntries = (calendar) => {
  if (!hasCalendarData(calendar)) return [];

  return Object.entries(calendar)
    .map(([key, value]) => {
      const date = toDate(key);
      return {
        date: toDayKey(date),
        count: toNumber(value, 0),
        dateObj: date,
      };
    })
    .sort((left, right) => left.date.localeCompare(right.date));
};

export const calculateStreakInfo = (
  calendar,
  fallback = FALLBACK_LEETCODE_PROFILE,
) => {
  const entries = getCalendarEntries(calendar);

  if (!entries.length) {
    return {
      current: fallback.currentStreak || 0,
      max: fallback.maxStreak || 0,
      totalActive: fallback.totalActiveDays || 0,
      totalSubmissions: fallback.totalSubmissionsPastYear || 0,
    };
  }

  const activeDays = entries
    .filter((entry) => entry.count > 0)
    .map((entry) => entry.date);
  const activeSet = new Set(activeDays);
  const totalSubmissions = entries.reduce((sum, entry) => sum + entry.count, 0);

  let current = 0;
  let cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  while (activeSet.has(toDayKey(cursor))) {
    current += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  let max = 0;
  let streak = 0;
  let previousDate = null;

  for (const entry of entries.filter((day) => day.count > 0)) {
    if (!previousDate) {
      streak = 1;
    } else {
      const diff =
        (new Date(entry.date) - new Date(previousDate)) / (1000 * 60 * 60 * 24);
      streak = diff === 1 ? streak + 1 : 1;
    }

    previousDate = entry.date;
    max = Math.max(max, streak);
  }

  return {
    current,
    max,
    totalActive: activeSet.size,
    totalSubmissions,
  };
};

export const buildMonthlyActivity = (calendar) => {
  const entries = getCalendarEntries(calendar);

  if (!entries.length) return [];

  const now = new Date();
  const months = [];

  for (let offset = 11; offset >= 0; offset -= 1) {
    const monthDate = new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - offset, 1),
    );
    const startOfMonth = new Date(
      Date.UTC(monthDate.getUTCFullYear(), monthDate.getUTCMonth(), 1),
    );
    const endOfMonth = new Date(
      Date.UTC(monthDate.getUTCFullYear(), monthDate.getUTCMonth() + 1, 1),
    );

    const count = entries.reduce((sum, entry) => {
      const entryDate = new Date(`${entry.date}T00:00:00Z`);
      return entryDate >= startOfMonth && entryDate < endOfMonth
        ? sum + entry.count
        : sum;
    }, 0);

    months.push({
      name: monthDate.toLocaleString('en-US', { month: 'short' }),
      solved: count,
    });
  }

  return months;
};

export const buildSnapshotMonthlyActivity = (
  stats = FALLBACK_LEETCODE_PROFILE,
) => {
  const total =
    stats.totalSubmissionsPastYear ||
    FALLBACK_LEETCODE_PROFILE.totalSubmissionsPastYear;
  const random = createSeededRandom(
    `${stats.username || stats.displayName || 'leetcode'}-monthly`,
  );
  const weights = Array.from({ length: 12 }, () => 0.6 + random() * 0.8);
  const weightSum = weights.reduce((sum, value) => sum + value, 0);

  return weights.map((weight, index) => ({
    name: new Date(Date.UTC(2026, index, 1)).toLocaleString('en-US', {
      month: 'short',
    }),
    solved: Math.max(1, Math.round((total * weight) / weightSum)),
  }));
};
