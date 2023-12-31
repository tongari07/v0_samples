"use client";

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/XrQ7NhVsVlf
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";

export function Dashboard() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            href="#"
          >
            <ComputerIcon className="w-6 h-6" />
            <span className="sr-only">Admin Dashboard</span>
          </Link>
          <Link className="font-bold" href="#">
            Dashboard
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            User Management
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Reports
          </Link>
        </nav>
        <div className="ml-auto flex gap-2">
          <Button variant="outline">Logout</Button>
          <Avatar className="h-9 w-9">
            <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Active Users
              </CardTitle>
              <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                User Registrations
              </CardTitle>
              <FormInputIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <LineChart className="w-full h-[300px]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                User Activities
              </CardTitle>
              <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <BarChart className="w-full h-[300px]" />
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">User List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>john@example.com</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="success">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2</TableCell>
                  <TableCell>Jane Doe</TableCell>
                  <TableCell>jane@example.com</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="danger">Inactive</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">3</TableCell>
                  <TableCell>Jack Doe</TableCell>
                  <TableCell>jack@example.com</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="success">Active</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function FormInputIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <path d="M12 12h.01" />
      <path d="M17 12h.01" />
      <path d="M7 12h.01" />
    </svg>
  );
}

function ComputerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  );
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          {
            name: "A",
            data: 111,
          },
          {
            name: "B",
            data: 157,
          },
          {
            name: "C",
            data: 129,
          },
          {
            name: "D",
            data: 187,
          },
          {
            name: "E",
            data: 119,
          },
          {
            name: "F",
            data: 22,
          },
          {
            name: "G",
            data: 101,
          },
          {
            name: "H",
            data: 83,
          },
        ]}
        keys={["data"]}
        indexBy="name"
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "paired" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Name",
          legendPosition: "middle",
          legendOffset: 45,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Number",
          legendPosition: "middle",
          legendOffset: -45,
          truncateTickAt: 0,
        }}
        theme={{
          tooltip: {
            container: {
              fontSize: "12px",
            },
          },
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "C",
            data: [
              {
                x: 1,
                y: 283,
              },
              {
                x: 2,
                y: 250,
              },
              {
                x: 3,
                y: 152,
              },
              {
                x: 4,
                y: 294,
              },
              {
                x: 5,
                y: 211,
              },
              {
                x: 6,
                y: 172,
              },
              {
                x: 7,
                y: 24,
              },
              {
                x: 8,
                y: 25,
              },
              {
                x: 9,
                y: 76,
              },
              {
                x: 10,
                y: 5,
              },
            ],
          },
          {
            id: "B",
            data: [
              {
                x: 1,
                y: 43,
              },
              {
                x: 2,
                y: 237,
              },
              {
                x: 3,
                y: 21,
              },
              {
                x: 4,
                y: 35,
              },
              {
                x: 5,
                y: 26,
              },
              {
                x: 6,
                y: 154,
              },
              {
                x: 7,
                y: 181,
              },
              {
                x: 8,
                y: 65,
              },
              {
                x: 9,
                y: 261,
              },
              {
                x: 10,
                y: 199,
              },
            ],
          },
          {
            id: "A",
            data: [
              {
                x: 1,
                y: 240,
              },
              {
                x: 2,
                y: 228,
              },
              {
                x: 3,
                y: 77,
              },
              {
                x: 4,
                y: 178,
              },
              {
                x: 5,
                y: 196,
              },
              {
                x: 6,
                y: 204,
              },
              {
                x: 7,
                y: 153,
              },
              {
                x: 8,
                y: 289,
              },
              {
                x: 9,
                y: 250,
              },
              {
                x: 10,
                y: 274,
              },
            ],
          },
        ]}
        enableCrosshair={false}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "X",
          legendOffset: 45,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Y",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        colors={{ scheme: "paired" }}
        pointSize={5}
        pointColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        pointBorderWidth={2}
        pointBorderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            symbolSize: 14,
            symbolShape: "circle",
          },
        ]}
        theme={{
          tooltip: {
            container: {
              fontSize: "12px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
