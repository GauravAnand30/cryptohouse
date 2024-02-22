import { makeStyles } from "@material-ui/core";

// Define styles outside of the component
const useStyles = makeStyles({
  selectbutton: {
    border: "1px solid gold",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",
    width: "22%",
    backgroundColor: (props) => (props.selected ? "gold" : ""),
    color: (props) => (props.selected ? "black" : ""),
    fontWeight: (props) => (props.selected ? 700 : 500),
    "&:hover": {
      backgroundColor: "gold",
      color: "black",
    },
  },
});

const SelectButton = ({ children, selected, onClick }) => {
  // Use styles
  const classes = useStyles({ selected });

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
