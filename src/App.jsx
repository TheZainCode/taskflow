import Button from "./components/ui/Button";
function App(){
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-800">TaskFlow Dashboard</h1>
      <Button variant="primary" size="md" isLoading={true}>Click</Button>
    </div>
  )
}
export default App;