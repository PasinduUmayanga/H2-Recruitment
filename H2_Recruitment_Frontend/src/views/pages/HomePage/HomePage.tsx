import React from "react";
import H2RDropDownSelect from "../../../common/components/H2RDropDownSelect/H2RDropDownSelect";

const Home = () => {
  return (
    <>
      <div>HomePage</div>
      <div>
        <H2RDropDownSelect id="tags-standard" options={top100Films} />

        <H2RDropDownSelect
          id="disable-clearable"
          isMultiple
          options={top100Films}
        />

        <H2RDropDownSelect
          id="disable-clearable"
          isMultiple
          options={top100Films}
        />
      </div>
    </>
  );
};
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];

const top10Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
];
export default Home;
