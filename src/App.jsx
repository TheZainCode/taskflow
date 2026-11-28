import Input from "./components/ui/Input";
import Button from "./components/ui/Button";

function App(){
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center w-full px-4">
        <h1 className="text-2xl font-bold text-gray-800">TaskFlow Dashboard</h1>
        
        <Input type="text" label="Full Name" placeholder="Enter your name" />
        
        <Button variant="primary" size="md">Submit</Button>
      </div>
  )
}

export default App;