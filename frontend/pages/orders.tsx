import { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

interface Order {
  id: number;
  customer: string;
  status: string;
}

type BadgeVariant = "default" | "secondary" | "outline" | "destructive";

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch("http://localhost:3001/orders");
      const data = await res.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  const statusVariantMap: { [key: string]: BadgeVariant } = {
    Completed: "default",
    Pending: "secondary",
    Processing: "outline",
  };

  const handleLogout = () => {
    // Clear the token from local storage (or handle your session management)
    localStorage.removeItem("token");

    // Redirect to the login page
    router.push("/login");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Order ID</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>
                <Badge variant={statusVariantMap[order.status] || "default"}>
                  {order.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-6">
        <Button onClick={handleLogout} className="w-30">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default OrdersPage;
