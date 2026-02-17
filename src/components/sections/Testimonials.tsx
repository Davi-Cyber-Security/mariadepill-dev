"use client";
import Image from "next/image";
import styles from '../styles/Testimonials/Testimonials.module.css';
import BlobMenor from '../../../public/BlocoImg/blob.svg';
import BlobMenorEscuro from '../../../public/BlocoImg/blobEscuro.png';
import BlobMariaDepill from '../../../public/BlocoImg/blobMariaDepill1.png';
import BlobMariaDepillEscuro from '../../../public/blobMariaDepill1Escuro.png';
import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "@/src/contexts/ThemeContext";

interface Review {
  id: number;
  name: string;
  initials: string;
  avatarColor: string;
  rating: number;
  text: string | null;
  timeAgo: string;
}

const MAPS_URL =
  "https://www.google.com/maps/place/Maria+Depill/@-14.0993985,-50.3360236,17z/data=!4m14!1m5!8m4!1e1!2s106675702664468810941!3m1!1e1!3m7!1s0x9369f51b1ab7567f:0x4c0b39e61bbff35c!8m2!3d-14.0994037!4d-50.3334487!9m1!1b1!16s%2Fg%2F11s3jjw79q?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D";


const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Lais Dal Olmo",
    initials: "L",
    avatarColor: "#7B2FBE",
    rating: 5,
    text: "A depiladora mais querida de Nova Crixás. Uma grande amiga e excelente profissional.",
    timeAgo: "2 anos atrás",
  },
  {
    id: 2,
    name: "juazinho 9",
    initials: "J",
    avatarColor: "#424242",
    rating: 5,
    text: "Ea melhor",
    timeAgo: "2 anos atrás",
  },
  {
    id: 3,
    name: "IOLANDA CRISTINA",
    initials: "I",
    avatarColor: "#C62828",
    rating: 5,
    text: "Atendimento perfeito",
    timeAgo: "2 anos atrás",
  },
  {
    id: 4,
    name: "luciene gomes",
    initials: "L",
    avatarColor: "#00897B",
    rating: 5,
    text: null,
    timeAgo: "um ano atrás",
  },
  {
    id: 5,
    name: "Mariana Nunes",
    initials: "M",
    avatarColor: "#1565C0",
    rating: 5,
    text: null,
    timeAgo: "2 anos atrás",
  },
  {
    id: 6,
    name: "Pietro Brito",
    initials: "P",
    avatarColor: "#6A1B9A",
    rating: 5,
    text: null,
    timeAgo: "2 anos atrás",
  },
  {
    id: 7,
    name: "Elisangela Gontijo",
    initials: "E",
    avatarColor: "#2E7D32",
    rating: 5,
    text: null,
    timeAgo: "2 anos atrás",
  },
  {
    id: 8,
    name: "Rafaela",
    initials: "R",
    avatarColor: "#AD1457",
    rating: 5,
    text: null,
    timeAgo: "2 anos atrás",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className={styles.sliderStars}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="22" height="22" viewBox="0 0 24 24"
          fill={i < rating ? "#FBBC04" : "#E0E0E0"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg width="70" height="24" viewBox="0 0 70 24" fill="none" aria-label="Google">
      <text x="0" y="20"
        fontFamily="'Google Sans', Arial, sans-serif"
        fontSize="22" fontWeight="400" letterSpacing="-0.5">
        <tspan fill="#4285F4">G</tspan>
        <tspan fill="#EA4335">o</tspan>
        <tspan fill="#FBBC05">o</tspan>
        <tspan fill="#4285F4">g</tspan>
        <tspan fill="#34A853">l</tspan>
        <tspan fill="#EA4335">e</tspan>
      </text>
    </svg>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.sliderCard}
    >
      <Stars rating={review.rating} />

      {review.text ? (
        <p className={styles.sliderReviewText}>{review.text}</p>
      ) : (
        <p className={styles.sliderNoText}>Avaliação sem comentário</p>
      )}

      <div
        className={styles.sliderAvatar}
        style={{ backgroundColor: review.avatarColor }}
      >
        {review.initials}
      </div>

      <span className={styles.sliderName}>{review.name}</span>
      <span className={styles.sliderTime}>{review.timeAgo}</span>
      <GoogleLogo />
    </a>
  );
}

function GoogleReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number, dir?: "left" | "right") => {
      if (animating || index === currentIndex) return;
      const resolvedDir = dir ?? (index > currentIndex ? "left" : "right");
      setDirection(resolvedDir);
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setAnimating(false);
      }, 380);
    },
    [animating, currentIndex]
  );

  const goNext = useCallback(() => {
    const next = (currentIndex + 1) % REVIEWS.length;
    goTo(next, "left");
  }, [currentIndex, goTo]);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(goNext, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, goNext]);

  const slideStyle: React.CSSProperties = {
    transform: animating
      ? `translateX(${direction === "left" ? "-110%" : "110%"})`
      : "translateX(0)",
    opacity: animating ? 0 : 1,
    transition: animating
      ? "transform 3s cubic-bezier(.4,0,.2,1), opacity 0.38s cubic-bezier(.4,0,.2,1)"
      : "none",
  };

  return (
    <div
      className={styles.sliderWrapper}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      <div className={styles.sliderViewport}>
        <div style={slideStyle}>
          <ReviewCard review={REVIEWS[currentIndex]} />
        </div>
      </div>

     
      <div className={styles.sliderDots}>
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            className={`${styles.sliderDot}${i === currentIndex ? ` ${styles.sliderDotActive}` : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Avaliação ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { isRoxoTheme } = useTheme();

  return (
    <div className={styles.container}>
      <h2
        className={`${styles.tituloGoolge} titulo-txt-rosa`}
        style={isRoxoTheme ? { color: "#463E70" } : undefined}
      >
        Avaliações do google
      </h2>
      <h3
        className={`${styles.txtRosa} txt-roxo-claro`}
        style={isRoxoTheme ? { color: "#A59DD4" } : undefined}
      >
        veja o que nossos clientes dizem sobre nós
      </h3>

      <div className={styles.wrapper}>
        <div
          className={styles['card-depoimentos']}
          style={isRoxoTheme ? { backgroundColor: "#463E70" } : undefined}
        >
          <Image
            className={styles.blobMenor}
            src={isRoxoTheme ? BlobMenorEscuro : BlobMenor}
            alt="Blob menor"
          />

         
          <div className={styles['depoimento-item']}>
            <GoogleReviewsSlider />
          </div>
        </div>

        <div className={styles['paleta-decoration']}>
          <Image
            className={styles.blobMaior}
            src={isRoxoTheme ? BlobMariaDepillEscuro : BlobMariaDepill}
            alt="Blob maior"
          />
        </div>
      </div>
    </div>
  );
}