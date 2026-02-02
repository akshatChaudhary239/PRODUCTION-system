import { Paper, Text, Stack } from "@mantine/core";
import { motion } from "framer-motion";

type Props = {
  label: string;
  value: string;
};

export default function StatCard({ label, value }: Props) {
  return (
    <motion.div whileHover={{ y: -4 }}>
      <Paper p="md" radius="lg" className="glass">
        <Stack gap={4}>
          <Text size="sm" c="dimmed">
            {label}
          </Text>
          <Text fw={700} size="xl">
            {value}
          </Text>
        </Stack>
      </Paper>
    </motion.div>
  );
}
