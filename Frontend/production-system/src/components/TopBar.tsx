import { Group, Title, ActionIcon, Avatar } from "@mantine/core";
import { IconBell, IconSearch } from "@tabler/icons-react";

export default function TopBar() {
  return (
    <Group justify="space-between" mb="lg">
      <Title order={3}>AI Hiring Dashboard</Title>

      <Group>
        <ActionIcon variant="subtle">
          <IconSearch size={18} />
        </ActionIcon>
        <ActionIcon variant="subtle">
          <IconBell size={18} />
        </ActionIcon>
        <Avatar radius="xl" size="sm" />
      </Group>
    </Group>
  );
}
