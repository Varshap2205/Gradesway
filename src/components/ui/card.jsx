export function Card({ children, className }) {
    return <div className={`shadow-md p-4 rounded-lg bg-white ${className}`}>{children}</div>;
  }
  
  export function CardContent({ children, className }) {
    return <div className={`p-4 ${className}`}>{children}</div>;
  }
  
  export function CardHeader({ children, className }) {
    return <div className={`border-b p-4 font-bold ${className}`}>{children}</div>;
  }
  
  export function CardTitle({ children, className }) {
    return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
  }
  