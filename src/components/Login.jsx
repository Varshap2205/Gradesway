import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Import shadcn button
import { Input } from "@/components/ui/input"; // Import shadcn input
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import shadcn card
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const success = login(email, password);
    if (success) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="email"
            placeholder="Email"
            className="mb-3"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            className="mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="w-full" onClick={handleLogin}>
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
