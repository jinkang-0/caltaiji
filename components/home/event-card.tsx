import { Event } from "@/lib/types";
import MapIcon from "@/icons/map";
import { getDate, getMonth } from "@/lib/utils";
import styles from "./events-section.module.scss";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const month = getMonth(event.date);
  const date = getDate(event.date);

  return (
    <div className={styles.card}>
      <header>
        <p>{month}</p>
        <span>{date}</span>
      </header>
      <div className={styles.cardBody}>
        <b>{event.name}</b>
        <span>
          {event.from} - {event.to}
        </span>
        <div>
          <MapIcon />
          <p>{event.location}</p>
        </div>
      </div>
    </div>
  );
}
