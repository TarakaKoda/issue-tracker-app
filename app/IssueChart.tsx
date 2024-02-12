"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

interface DataItem {
  label: string;
  value: number;
  color: string;
}

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueChart = ({ open, inProgress, closed }: Props) => {
  const data: DataItem[] = [
    { label: "Open", value: open, color: "#EF4444" }, // Red
    { label: "In Progress", value: inProgress, color: "#8B5CF6" }, // Violet
    { label: "Closed", value: closed, color: "#10B981" }, // Green
  ];

  return (
    <Card className="h-auto w-full dark:border-[#333] dark:bg-[#222]">
      <CardContent className="w-full">
        <ResponsiveContainer width="100%" height={470}>
          <BarChart data={data}>
            <XAxis dataKey="label" />
            <YAxis />
            <Bar dataKey="value" barSize={60}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default IssueChart;
