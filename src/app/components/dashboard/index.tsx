import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  Button,
  VStack,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FC } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: FC = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Revenue",
        data: [3000, 4000, 3200, 5400, 2900, 3900, 4500],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Revenue Over Time",
      },
    },
  };

  return (
    <Box p={6} bg="gray.900" color="white" minH="100vh">
      <Flex justify="space-between" align="center" mb={8}>
        <Text fontSize="3xl" fontWeight="bold">
          Dashboard
        </Text>
      </Flex>

      <Flex justify="space-between" align="center" mb={8}>
        <Text>Jan 20, 2023 - Feb 09, 2023</Text>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={4} mb={8}>
        <Box bg="gray.800" p={4} borderRadius="md">
          <Text>Total Revenue</Text>
          <Text fontSize="2xl" fontWeight="bold">
            $45,231.89
          </Text>
          <Text color="green.500">+20.1% from last month</Text>
        </Box>
        <Box bg="gray.800" p={4} borderRadius="md">
          <Text>Subscriptions</Text>
          <Text fontSize="2xl" fontWeight="bold">
            +2350
          </Text>
          <Text color="green.500">+180.1% from last month</Text>
        </Box>
        <Box bg="gray.800" p={4} borderRadius="md">
          <Text>Sales</Text>
          <Text fontSize="2xl" fontWeight="bold">
            +12,234
          </Text>
          <Text color="green.500">+19% from last month</Text>
        </Box>
        <Box bg="gray.800" p={4} borderRadius="md">
          <Text>Active Now</Text>
          <Text fontSize="2xl" fontWeight="bold">
            +573
          </Text>
          <Text color="green.500">+201 since last hour</Text>
        </Box>
      </SimpleGrid>

      <Box bg="gray.800" p={4} borderRadius="md" mb={8}>
        <Text fontSize="xl" mb={4}>
          Overview
        </Text>
        <Box h="64">
          <Bar data={data} options={options} />
        </Box>
      </Box>

      <Box bg="gray.800" p={4} borderRadius="md">
        <Text fontSize="xl" mb={4}>
          Recent Sales
        </Text>
        <VStack spacing={2} align="stretch">
          {[
            {
              name: "Olivia Martin",
              email: "olivia.martin@email.com",
              amount: "$1,999.00",
            },
            {
              name: "Jackson Lee",
              email: "jackson.lee@email.com",
              amount: "$39.00",
            },
            {
              name: "Isabella Nguyen",
              email: "isabella.nguyen@email.com",
              amount: "$299.00",
            },
            {
              name: "William Kim",
              email: "will@email.com",
              amount: "$99.00",
            },
            {
              name: "Sofia Davis",
              email: "sofia.davis@email.com",
              amount: "$39.00",
            },
          ].map((sale, index) => (
            <HStack key={index} justify="space-between">
              <HStack>
                <Avatar name={sale.name} size="sm" />
                <Box>
                  <Text>{sale.name}</Text>
                  <Text fontSize="sm" color="gray.400">
                    {sale.email}
                  </Text>
                </Box>
              </HStack>
              <Text>{sale.amount}</Text>
            </HStack>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Dashboard;
