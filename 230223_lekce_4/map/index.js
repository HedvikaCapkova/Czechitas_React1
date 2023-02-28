const isEmail = (str) => str.includes('@');

const roll = () => Math.floor(Math.random() * 6) + 1;

const getNumber = (id) => Number(document.querySelector(`#${id}`).value);

const weather = (temperature) => (temperature > 16 ? 'teplo' : 'zima');


const weekdays = [
    'pondělí',
    'úterý',
    'středa',
    'čtvrtek',
    'pátek',
    'sobota',
    'neděle',
  ];
  const months = [
    {
      name: 'leden',
      days: 31,
    },
    {
      name: 'únor',
      days: 28,
    },
    {
      name: 'březen',
      days: 31,
    },
    {
      name: 'duben',
      days: 30,
    },
    {
      name: 'květen',
      days: 31,
    },
    {
      name: 'červen',
      days: 30,
    },
    {
      name: 'červenec',
      days: 31,
    },
    {
      name: 'srpen',
      days: 31,
    },
    {
      name: 'září',
      days: 30,
    },
    {
      name: 'říjen',
      days: 31,
    },
    {
      name: 'listopad',
      days: 30,
    },
    {
      name: 'prosinec',
      days: 31,
    },
  ];

const upperCase = weekdays.map((weekday) => console.log(weekday.toUpperCase()));

const twoLetters = weekdays.map((weekday) => console.log(weekday.slice(0, 2)));

const numberOfDays = months.map((month) => console.log(month.days));

const firstDay = months.map((month) => console.log(`1. ${month.name} 2020`));







