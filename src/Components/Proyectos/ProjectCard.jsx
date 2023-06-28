import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import "./ProjectCard.css";

function ProyectosCard({ image, title, date, description }) {
  return (
    <>
      <Card shadow="lg" padding="lg" radius="md"  className='proyectos__card'>
        <Card.Section component="a" href="https://mantine.dev/">
          <Image
            src={image}
            height={320}
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={700} size={20} color="white">{title}</Text>
          <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
            {date}
          </Badge>
        </Group>

        <Text size="sm" color="white">
          {description}
        </Text>

        <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} fullWidth mt="md" radius="md" className='proyectos__card-buttton'>
          Ir a la página
        </Button>
      </Card>
    </>
  );
}

export default ProyectosCard;
