import Input from "./components/ui/Input";
import Button from "./components/ui/Button";
import Select from "./components/ui/Select";
import Badge from "./components/ui/Badge";

function App(){
  const taskStatusOptions = [
    { value: "todo", label: "To Do" },
    { value: "in-progress", label: "In Progress" },
    { value: "completed", label: "Completed" }
];
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center w-full px-4 gap-6">
        <h1 className="text-2xl font-bold text-gray-800">TaskFlow Dashboard</h1>
        
        <Input type="text" label="Full Name" placeholder="Enter your name" />
        
        <Button variant="primary" size="md">Submit</Button>
        
        <Select
        label="Task Status"
        placeholder="Select status..."
        options={taskStatusOptions}
/>

<Badge variant="info" size="md">Zain</Badge>
      </div>
  )
}

export default App;