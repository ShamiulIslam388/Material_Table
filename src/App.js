import "./styles.css";
import MaterialTable from "./MaterialTable";

export default function App() {
  const headCells = [
    {
      id: "name",
      label: "Dessert (100g serving)"
    },
    {
      id: "calories",
      label: "Calories"
    },
    {
      id: "fat",
      label: "Fat (g)"
    },
    {
      id: "carbs",
      label: "Carbs (g)"
    },
    {
      id: "protein",
      label: "Protein (g)"
    },
    {
      id: "extra",
      label: "Extra"
    }
  ];
  const rows = [
    {
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      extra: 6
    },
    {
      name: "Donut",
      calories: 306,
      fat: 3.73,
      carbs: 80,
      protein: 5,
      extra: 9
    },
    {
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      extra: 6
    },
    {
      name: "Donut",
      calories: 306,
      fat: 3.73,
      carbs: 80,
      protein: 5,
      extra: 9
    },
    {
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      extra: 6
    },
    {
      name: "Donut",
      calories: 306,
      fat: 3.73,
      carbs: 80,
      protein: 5,
      extra: 9
    },
    {
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      extra: 6
    },
    {
      name: "Donut",
      calories: 306,
      fat: 3.73,
      carbs: 80,
      protein: 5,
      extra: 9
    },
    {
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      extra: 6
    },
    {
      name: "Donut",
      calories: 306,
      fat: 3.73,
      carbs: 80,
      protein: 5,
      extra: 9
    },
    {
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      extra: 6
    },
    {
      name: "Donut",
      calories: 306,
      fat: 3.73,
      carbs: 80,
      protein: 5,
      extra: 9
    }
  ];
  return (
    <div className="App">
      <MaterialTable rows={rows} headCells={headCells} />
    </div>
  );
}
