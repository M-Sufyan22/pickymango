import React, { useState } from "react";
import {
  Button,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../images/icons/search-box.svg";
import { useLanguage } from "../../hooks/useLanguage";

const useStyles = makeStyles((theme) => ({
  root: {
    transition: `all 0.3s ease-in`,
  },
  icon: {
    position: `absolute`,
    right: 10,
    top: 10,
  },
  input: {
    "& input.MuiInputBase-input.MuiFilledInput-input.MuiInputBase-inputTypeSearch":
      {
        padding: `9px 4px`,
      },
  },
}));

export const location = [
  "Singapore",
  "Syria",
  "United States",
  "Hong Kong S.A.R.",
  "Montenegro",
  "Serbia",
  "Ecuador",
  "Mali",
  "Jamaica",
  "Indonesia",
  "Mexico",
  "Greece",
  "Myanmar",
  "Honduras",
  "Luxembourg",
  "Ethiopia",
  "Switzerland",
  "Thailand",
  "Lithuania",
  "Peoples Republic of China",
  "Georgia",
  "Cameroon",
  "World",
  "Peru",
  "Saudi Arabia",
  "Tunisia",
  "Slovenia",
  "Bolivia",
  "Yemen",
  "Nigeria",
  "Caribbean",
  "Malta",
  "Senegal",
  "Mongolia",
  "Haiti",
  "Canada",
  "Azerbaijan",
  "Algeria",
  "Bangladesh",
  "Albania",
  "Portugal",
  "New Zealand",
  "U.A.E.",
  "Dominican Republic",
  "Australia",
  "Croatia",
  "Latin America",
  "Czech Republic",
  "Poland",
  "Congo (DRC)",
  "Moldova",
  "El Salvador",
  "Maldives",
  "Italy",
  "France",
  "Iceland",
  "Principality of Monaco",
  "Uzbekistan",
  "Puerto Rico",
  "Ireland",
  "Botswana",
  "Brazil",
  "Liechtenstein",
  "Libya",
  "Germany",
  "Kenya",
  "Tajikistan",
  "Malaysia",
  "Réunion",
  "Panama",
  "Austria",
  "Afghanistan",
  "Finland",
  "Chile",
  "Eritrea",
  "Argentina",
  "Kazakhstan",
  "Nepal",
  "Sweden",
  "Colombia",
  "Lebanon",
  "Turkey",
  "Japan",
  "Greenland",
  "Egypt",
  "Estonia",
  "Qatar",
  "Philippines",
  "Vietnam",
  "Bosnia and Herzegovina",
  "Cambodia",
  "Kuwait",
  "Spain",
  "Belgium",
  "North Macedonia",
  "Guatemala",
  "Kyrgyzstan",
  "Slovakia",
  "Nicaragua",
  "Iran",
  "Uruguay",
  "Taiwan",
  "Islamic Republic of Pakistan",
  "Costa Rica",
  "Romania",
  "Lao P.D.R.",
  "Ukraine",
  "Cuba",
  "Iraq",
  "Paraguay",
  "Russia",
  "Zimbabwe",
  "Norway",
  "Faroe Islands",
  "Brunei Darussalam",
  "Côte d’Ivoire",
  "Israel",
  "Bolivarian Republic of Venezuela",
  "Hungary",
  "Korea",
  "South Africa",
  "Somalia",
  "Macao S.A.R.",
  "Oman",
  "India",
  "Sri Lanka",
  "Latvia",
  "Bahrain",
  "Netherlands",
  "Denmark",
  "Jordan",
  "Bosnia and Herzegovina",
  "Turkmenistan",
  "United Kingdom",
  "Bulgaria",
  "Rwanda",
  "Belize",
  "Trinidad and Tobago",
  "Belarus",
  "Armenia",
  "Bhutan",
  "Morocco",
];

// export const categories = [
//   "ازياء",
//   "الصحة",
//   " رياضة",
//   "موسيقى",
//   "فنون",
//   "التجميل",
//   "خدمات",
//   "العقارات",
//   "الحديقة والمنزل",
//   "الغذاء",
//   "التعليم والتدريب",
//   "سيارات",
//   "الالكترونيات",
//   "الحيوانات الأليفة",
// ];
export const categories = [
  "Fashion",
  "Health",
  "Sport",
  "Music",
  "Arts",
  "Cosmetic",
  "Services",
  "Real estate",
  "Garden and Home",
  "Food",
  "Education and Training",
  "Cars",
  "Electronics",
  "Pet",
];

const Searchbar = () => {
  const [category, setCategory] = useState("");
  const [defaultLocation, setLocation] = useState("");
  const { language } = useLanguage();
  const component = language.data.header.searchbar;
  const classes = useStyles();
  return (
    <div
      className={`search_bar border-bottom-0 row bg-white w-100 ${classes.root}`}
    >
      <div className="col-lg px-0">
        <TextField
          InputProps={{
            className: `bg-white py-2 border-right ${classes.input}`,
            startAdornment: (
              <InputAdornment className="mt-0" position="start">
                {" "}
                <SearchIcon width={18} />{" "}
              </InputAdornment>
            ),
          }}
          fullWidth
          placeholder={component.search_keyword}
          variant="filled"
          type="search"
        />
      </div>
      <div className="col-lg px-0">
        <Autocomplete
          id="categories"
          options={categories}
          onInputChange={(e, value) => setCategory(value)}
          getOptionLabel={(option) => option}
          ListboxProps={{ style: { direction: language.direction } }}
          style={{ width: `100%` }}
          renderInput={(params) => {
            params.InputProps.className =
              params.InputProps.className + " bg-white py-2 border-right";
            return (
              <TextField
                {...params}
                onChange={(e) => setLocation(e.target.value)}
                value={category}
                placeholder={component.category}
                variant="filled"
              />
            );
          }}
        />
      </div>
      <div className="col-lg px-0">
        <Autocomplete
          id="location"
          options={location}
          ListboxProps={{ style: { direction: language.direction } }}
          onInputChange={(e, value) => setLocation(value)}
          getOptionLabel={(option) => option}
          style={{ width: `100%` }}
          renderInput={(params) => {
            params.InputProps.className =
              params.InputProps.className + " bg-white py-2 border-right";
            return (
              <TextField
                {...params}
                onChange={(e) => setLocation(e.target.value)}
                value={defaultLocation}
                placeholder={component.location}
                variant="filled"
                className="english"
              />
            );
          }}
        />
      </div>
      <div className="col-lg-2 px-0">
        <Button
          component={Link}
          to={{
            pathname: "/view-ads-auctions",
          }}
          variant="contained"
          color="primary"
          fullWidth
          className="rounded-0 shadow-none text-white h-100"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Searchbar;
