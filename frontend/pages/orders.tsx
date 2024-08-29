import { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

interface Order {
  id: number;
  customer: string;
  status: string;
}

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch("http://localhost:3001/orders");
      const data = await res.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="bg-blue-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <Table className="min-w-full border">
        <TableHeader>
          <TableRow>
            <TableHead className="border p-2">Order ID</TableHead>
            <TableHead className="border p-2">Customer Name</TableHead>
            <TableHead className="border p-2">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} className="hover:bg-gray-100">
              <TableCell className="border p-2">{order.id}</TableCell>
              <TableCell className="border p-2">{order.customer}</TableCell>
              <TableCell className="border p-2">{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrdersPage;
