import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Heart,
  MapPin,
  Menu,
  Microscope,
  Phone,
  Scan,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";

/* ---------------------------------- data ---------------------------------- */

const WHATSAPP =
  "https://wa.me/5511961724207?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Allegra%20Odontologia.";

const ASSETS = {
  logoDark: "https://allegraodontologiaesaude.com/assets/logo-allegra-new-BKr1nFRX.webp",
  logoLight: "https://allegraodontologiaesaude.com/assets/logo-allegra-luxury-hp_wvUWs.webp",
  hero: "https://allegraodontologiaesaude.com/assets/hero-clinic-DPWS3L83.webp",
};

const services = [
  {
    title: "Lentes de Porcelana",
    desc: "Facetas ultrafinas de 0,3 a 0,5 mm para transformação completa e natural do sorriso.",
    img: "https://allegraodontologiaesaude.com/assets/service-lentes-porcelana-iFN6qZ_P.jpg",
    tag: "Referência há 25 anos",
  },
  {
    title: "Implantes Dentários",
    desc: "Reposição definitiva com planejamento digital 3D e titânio de alta performance.",
    img: "https://allegraodontologiaesaude.com/assets/service-implantes-dentarios-DguOb0nD.jpg",
    tag: "Planejamento 3D",
  },
  {
    title: "Prótese Protocolo",
    desc: "Arcada completa sobre implantes com estabilidade, estética e carga imediata.",
    img: "https://allegraodontologiaesaude.com/assets/service-protese-protocolo-CYPYMVz9.jpg",
    tag: "Reabilitação total",
  },
  {
    title: "Endodontia",
    desc: "Tratamento de canal com microscópio operatório, precisão e conforto.",
    img: "https://allegraodontologiaesaude.com/assets/service-endodontia-AE_mYIiK.jpg",
    tag: "Microscopia",
  },
  {
    title: "Harmonização Facial",
    desc: "Equilíbrio orofacial com botox, preenchimento e planejamento integrado.",
    img: "https://allegraodontologiaesaude.com/assets/service-harmonizacao-facial-BxU_gDev.jpg",
    tag: "Estética integrada",
  },
  {
    title: "Sedação Consciente",
    desc: "Atendimento tranquilo com óxido nitroso para quem tem medo de dentista.",
    img: "https://allegraodontologiaesaude.com/assets/service-sedacao-consciente-BWzPEeK8.jpg",
    tag: "Sem medo",
  },
  {
    title: "Gengivoplastia",
    desc: "Contorno gengival a laser para um sorriso mais harmônico e saudável.",
    img: "https://allegraodontologiaesaude.com/assets/service-gengivoplastia-DRVi7VjA.jpg",
    tag: "Laser",
  },
  {
    title: "Extração de Siso",
    desc: "Cirurgia segura com avaliação 3D e condução bucomaxilofacial especializada.",
    img: "https://allegraodontologiaesaude.com/assets/service-extracao-siso-BY7gi4xG.jpg",
    tag: "Cirurgia",
  },
  {
    title: "Remoção de Lentes",
    desc: "Troca segura de lentes antigas com preservação máxima do dente.",
    img: "https://allegraodontologiaesaude.com/assets/service-remocao-lentes-dDYAQZlW.jpg",
    tag: "Retratamento",
  },
];

const allSpecialties = [
  "Lentes de Porcelana",
  "Implantes Dentários",
  "Prótese Protocolo",
  "Endodontia",
  "Ortodontia e Alinhadores",
  "Periodontia",
  "Odontopediatria",
  "Cirurgia Bucomaxilofacial",
  "Harmonização Facial",
  "Sedação Consciente",
  "Clareamento Dental",
  "Gengivoplastia",
  "Extração de Siso",
  "Prótese Dentária",
  "DTM e Dor Orofacial",
  "Terapia a Laser",
  "Cirurgia Oral Menor",
  "Remoção de Lentes",
];

const techCards = [
  {
    title: "Scanner iTero",
    desc: "Moldagem digital sem massa — mais precisão e conforto.",
    img: "https://allegraodontologiaesaude.com/assets/tech-itero-BBplVnjK.avif",
  },
  {
    title: "Primescan",
    desc: "Captura intraoral de alta definição para o planejamento.",
    img: "https://allegraodontologiaesaude.com/assets/tech-primescan-BIwD_oqE.avif",
  },
  {
    title: "Sistema CAD/CAM",
    desc: "Projeto e fresagem computadorizada de peças precisas.",
    img: "https://allegraodontologiaesaude.com/assets/tech-cadcam--pIQU5pa.avif",
  },
];

const techList = [
  "Planejamento digital do sorriso",
  "Tomografia e RX panorâmico",
  "RX periapical digital",
  "Impressão 3D e guias cirúrgicos",
  "Laser de baixa potência",
  "AirFlow GBT / profilaxia",
  "Microscópio operatório",
  "Laboratório próprio",
];

const doctors = [
  {
    name: "Dr. Rodolfo Segawa",
    role: "Cirurgião-Dentista · Fundador",
    crosp: "CROSP 61.148",
    exp: "25 anos de experiência",
    bio: "Referência em lentes de porcelana e reabilitação oral. Pioneiro no Brasil em Prime Scan, laser Erbium YAG e laboratório próprio.",
    images: [
      "https://allegraodontologia.com.br/wp-content/uploads/2024/07/Dr.-Rodolfo-Segawa-Protesista-em-SP-_2_-2.webp",
    ],
    featured: true,
  },
  {
    name: "Dra. Gabrielle Tomokane",
    role: "Cirurgia Bucomaxilofacial",
    crosp: "CROSP 141.352",
    exp: "Residência Santa Casa de SP",
    bio: "Graduada pela UNINOVE (2020). Cirurgia oral menor e maior, implantes e harmonização orofacial.",
    images: [
      "/images/dra-gabrielle-tomokane.png",
      "/images/dra-gabrielle-tomokane.webp",
      "/images/dra-gabrielle-tomokane.jpg",
      "/images/dra-gabrielle-tomokane.jpeg",
    ],
    featured: false,
  },
  {
    name: "Dr. Quirino Neto",
    role: "Periodontia",
    crosp: "CROSP 160.159",
    exp: "4 anos de experiência",
    bio: "Saúde gengival, tratamento de gengivite e periodontite, cirurgias estéticas e regenerativas a laser.",
    images: ["https://allegraodontologiaesaude.com/assets/doctor-quirino-BFDIaAgQ.avif"],
    featured: false,
  },
  {
    name: "Dr. Andres Felipe Alves",
    role: "Dentística Restauradora Estética",
    crosp: "CROSP 151.439",
    exp: "3 anos de experiência",
    bio: "Restaurações em resina, porcelanas, clareamento, próteses e atendimento restaurador completo.",
    images: ["https://allegraodontologiaesaude.com/assets/doctor-andres-BSNY-9Gr.avif"],
    featured: false,
  },
  {
    name: "Dra. Laryssa Fujimoto",
    role: "Reabilitação Oral",
    crosp: "CROSP 170.396",
    exp: "2 anos de experiência",
    bio: "Próteses fixas e removíveis, restaurações estéticas e odontologia preventiva.",
    images: ["https://allegraodontologiaesaude.com/assets/doctor-laryssa-BoF5jIjG.avif"],
    featured: false,
  },
];

const cases = [
  {
    name: "Alber Antonio",
    treatment: "Lentes de Porcelana · 20 elementos",
    before: "https://allegraodontologiaesaude.com/assets/case-alber-teeth-before-DtDjdCS5.png",
    after: "https://allegraodontologiaesaude.com/assets/case-alber-teeth-after-B2Kc9vLu.png",
    portrait: "https://allegraodontologiaesaude.com/assets/case-alber-after-DODBiI1H.png",
  },
  {
    name: "Daniela Araujo",
    treatment: "Lentes de Contato · transformação completa",
    before: "https://allegraodontologiaesaude.com/assets/case-daniela-teeth-before-cRkJSK5z.png",
    after: "https://allegraodontologiaesaude.com/assets/case-daniela-teeth-after-lrnCKQYs.png",
    portrait: "https://allegraodontologiaesaude.com/assets/case-daniela-after-YvKbh_OW.png",
  },
  {
    name: "Nicolle Santos",
    treatment: "Lentes de Contato · sorriso harmônico",
    before: "https://allegraodontologiaesaude.com/assets/case-nicolle-teeth-before-BRAdDtGC.png",
    after: "https://allegraodontologiaesaude.com/assets/case-nicolle-teeth-after-DbtV3gCF.png",
    portrait: "https://allegraodontologiaesaude.com/assets/case-nicolle-after-m55trJWp.png",
  },
  {
    name: "Jenifer",
    treatment: "Lentes de Contato · transformação do sorriso",
    before: "https://allegraodontologiaesaude.com/assets/case-jenifer-teeth-before-D-JgDsaO.png",
    after: "https://allegraodontologiaesaude.com/assets/case-jenifer-teeth-after-BAo9ZFs4.png",
    portrait: "https://allegraodontologiaesaude.com/assets/case-jenifer-after-D_uJJAKD.png",
  },
];

const clinicImages = [
  {
    src: "https://allegraodontologia.com.br/wp-content/uploads/2025/03/Foto-da-recepcao-da-Allegra-Odontologia-2-scaled-1.webp",
    label: "Recepção",
  },
  {
    src: "https://allegraodontologia.com.br/wp-content/uploads/2022/05/Foto-da-Sala-de-Espera-do-Dr.-Rodolfo-Segawa-na-Allegra-Odontologia-jpg.webp",
    label: "Sala de espera",
  },
  {
    src: "https://allegraodontologiaesaude.com/assets/hero-clinic-DPWS3L83.webp",
    label: "Consultório digital",
  },
  {
    src: "https://allegraodontologia.com.br/wp-content/uploads/2023/10/sala-de-descanso-vip-Dr.-Rodolfo-Segawa-na-Allegra-Odontologia-2-jpg.webp",
    label: "Sala de descanso VIP",
  },
  {
    src: "https://allegraodontologia.com.br/wp-content/uploads/2023/08/C0042T01-jpg.webp",
    label: "Tecnologia CAD/CAM",
  },
  {
    src: "https://allegraodontologia.com.br/wp-content/uploads/2024/11/capa-home.webp",
    label: "Fachada Tatuapé",
  },
];

const testimonials = [
  {
    name: "Paciente · Tatuapé",
    text: "Excelente atendimento, da recepção aos profissionais. Limpeza, organização e cuidado em cada detalhe. Nota 10, recomendo.",
    treatment: "Tratamento completo",
  },
  {
    name: "Paciente · Prótese",
    text: "Fiz minha prótese com o Dr. Rodolfo e estou muito feliz e satisfeita. Trabalho impecável do início ao fim.",
    treatment: "Prótese dentária",
  },
  {
    name: "Paciente · Estética",
    text: "O Dr. Rodolfo arrasou nos meus dentes. Fui muito bem tratada em todas as consultas, me senti acolhida e respeitada.",
    treatment: "Lentes de porcelana",
  },
  {
    name: "Paciente · Família",
    text: "Vi de perto a tecnologia da clínica: escaneamento instantâneo e dentes produzidos com precisão impressionante. Fantástico.",
    treatment: "Reabilitação oral",
  },
];

const units = [
  {
    name: "Tatuapé",
    address: "Rua Padre Estêvão Pernet, 175 — Tatuapé, São Paulo · SP — 03315-000",
    phone: "(11) 96172-4207",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7096686740865!2d-46.57573952443054!3d-23.542942560916266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5eea68aa36bf%3A0xebd053b3cbda51b1!2sAllegra%20Odontologia%20Tatuap%C3%A9%20%7C%20Est%C3%A9tica%20Dental!5e0!3m2!1sen!2sbr!4v1765312329536!5m2!1sen!2sbr",
  },
  {
    name: "Itaim Bibi",
    address: "Av. República do Líbano, 1673 — Moema, São Paulo · SP — 04501-001",
    phone: "(11) 96655-7359",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.25034406036!2d-46.66668702442883!3d-23.595353062842356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce595d0210ae2f%3A0x9a72e4300cedc386!2sOPT.DOC%20Coworking%20M%C3%A9dico%20e%20Odontol%C3%B3gico!5e0!3m2!1sen!2sbr!4v1765312368145!5m2!1sen!2sbr",
  },
  {
    name: "Itapevi",
    address: "Rua Américo Valentim Cristianini, 10 — Centro, Itapevi · SP — 06650-000",
    phone: "(11) 96172-4207",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.7900279140235!2d-46.937779926696855!3d-23.5486819087871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf074ba5ed3f8b%3A0xe55a8ef507d576c8!2sAll%20Odontologia%20%7C%20Lentes%20de%20porcelana%20%7C%20Dentista%20em%20Itapevi!5e0!3m2!1sen!2sbr!4v1765312479228!5m2!1sen!2sbr",
  },
];

const faqs = [
  {
    q: "Quanto tempo duram as lentes de porcelana?",
    a: "Em média de 10 a 15 anos — podendo durar ainda mais com higiene adequada e visitas regulares. Utilizamos cerâmicas de última geração, com cor estável e alta resistência.",
  },
  {
    q: "O procedimento de lentes dói?",
    a: "Não. É minimamente invasivo e realizado com anestesia local quando necessário. A maioria dos pacientes relata total conforto durante o processo.",
  },
  {
    q: "Quantas sessões são necessárias?",
    a: "Geralmente de 3 a 4 sessões em 2 a 3 semanas: avaliação, planejamento digital, preparo e cimentação definitiva.",
  },
  {
    q: "Vocês atendem quem tem medo de dentista?",
    a: "Sim. Oferecemos sedação consciente com óxido nitroso e o Day Clinic — tratamento concentrado em um único dia, com total segurança.",
  },
  {
    q: "Como funciona a primeira avaliação?",
    a: "Avaliação clínica completa com exames, escuta do seu objetivo e plano de tratamento personalizado com orçamento transparente.",
  },
  {
    q: "Quais são as unidades e horários?",
    a: "Tatuapé, Itaim Bibi e Itapevi. Segunda a sexta, 8h às 19h, e sábado, 8h às 12h. Agende pelo WhatsApp (11) 96172-4207.",
  },
];

/* -------------------------------- components ------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#B8935F] text-[#B8935F]" />
      ))}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  desc,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  dark?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-[#B8935F]" />
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B8935F]">{eyebrow}</p>
      </div>
      <h2
        className={`mt-4 font-display text-3xl leading-tight font-medium md:text-[2.75rem] md:leading-[1.15] ${
          dark ? "text-white" : "text-[#10233F]"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${dark ? "text-white/70" : "text-[#5A6B84]"}`}>
          {desc}
        </p>
      )}
    </motion.div>
  );
}

function DoctorPhoto({ images, name, className = "" }: { images: string[]; name: string; className?: string }) {
  const [index, setIndex] = useState(0);
  const src = images[index];
  const initials = name
    .replace(/^(Dr\.|Dra\.)\s*/, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  if (!src) {
    return (
      <div
        className={`flex items-center justify-center bg-[#0E2A4E] ${className}`}
        role="img"
        aria-label={name}
      >
        <div className="text-center">
          <p className="font-display text-5xl text-[#E9DCC3]">{initials}</p>
          <p className="mt-2 px-6 text-xs tracking-wide text-white/60 uppercase">{name}</p>
        </div>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      decoding="async"
      onError={() => setIndex((i) => i + 1)}
      className={`object-cover ${className}`}
    />
  );
}

function BeforeAfter({ before, after, name }: { before: string; after: string; name: string }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const pct = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] cursor-ew-resize touch-none overflow-hidden rounded-2xl bg-[#0E2A4E] select-none"
      onPointerDown={(e) => {
        setDragging(true);
        move(e.clientX);
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      }}
      onPointerMove={(e) => dragging && move(e.clientX)}
      onPointerUp={() => setDragging(false)}
      onPointerLeave={() => setDragging(false)}
      role="slider"
      aria-label={`Comparar antes e depois de ${name}`}
      aria-valuenow={Math.round(pos)}
    >
      <img src={after} alt={`Depois — ${name}`} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt={`Antes — ${name}`} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      </div>
      <span className="absolute top-4 left-4 rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur">
        Antes
      </span>
      <span className="absolute top-4 right-4 rounded-full bg-[#B8935F] px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-white uppercase">
        Depois
      </span>
      <div className="absolute inset-y-0 z-10" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -translate-x-1/2 bg-white shadow-lg" style={{ width: 2 }} />
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl">
          <div className="flex items-center gap-0.5 text-[#10233F]">
            <ChevronDown className="h-4 w-4 -rotate-90" />
            <ChevronDown className="h-4 w-4 rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------- app ----------------------------------- */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCase, setActiveCase] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const nav = [
    ["Tratamentos", "#tratamentos"],
    ["Tecnologia", "#tecnologia"],
    ["Equipe", "#equipe"],
    ["Casos", "#casos"],
    ["Estrutura", "#estrutura"],
    ["Unidades", "#unidades"],
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F4] font-sans text-[#10233F] antialiased selection:bg-[#B8935F] selection:text-white">
      {/* top trust bar */}
      <div className="bg-[#0A1C33] px-4 py-2 text-[11px] tracking-wide text-white/75 md:text-xs">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1">
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-[#D8C49A]" />
            RT: Dr. Rodolfo Segawa · CROSP 61.148 — CROSP-CL 20.602
          </p>
          <div className="hidden items-center gap-5 md:flex">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#D8C49A]" /> Seg–Sex 8h–19h · Sáb 8h–12h
            </span>
            <a href="tel:+551135628744" className="flex items-center gap-1.5 hover:text-white">
              <Phone className="h-3.5 w-3.5 text-[#D8C49A]" /> (11) 3562-8744
            </a>
          </div>
        </div>
      </div>

      {/* header */}
      <header className="sticky top-0 z-50 border-b border-[#E7E0D2] bg-[#FAF8F4]/90 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between px-4 md:px-8">
          <a href="#inicio" aria-label="Allegra Odontologia — início">
            <img src={ASSETS.logoDark} alt="Allegra Odontologia" className="h-10 w-auto md:h-11" />
          </a>
          <nav className="hidden items-center gap-7 text-[13px] font-medium tracking-wide text-[#33475F] lg:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-[#0E2A4E]">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[#0E2A4E] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#16345F] sm:inline-flex"
            >
              <Calendar className="h-4 w-4" />
              Agendar avaliação
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E0D7C3] text-[#0E2A4E] lg:hidden"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-[#E7E0D2] bg-white lg:hidden"
            >
              <div className="space-y-1 px-4 py-4">
                {nav.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-[#0E2A4E] hover:bg-[#F4EEE1]"
                  >
                    {label}
                  </a>
                ))}
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
                >
                  Agendar pelo WhatsApp
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main id="inicio">
        {/* ------------------------------- hero ------------------------------- */}
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
            style={{
              backgroundImage: "radial-gradient(#D9CDAF 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage: "linear-gradient(to bottom, black, transparent 70%)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent 70%)",
            }}
          />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pt-12 pb-16 md:px-8 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20 lg:pb-24">
            <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E0D7C3] bg-white px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-[#7A6A45] uppercase">
                <Sparkles className="h-3.5 w-3.5 text-[#B8935F]" />
                Odontologia premium · desde 2000
              </div>
              <h1 className="mt-6 font-display text-[2.6rem] leading-[1.08] font-medium text-[#0C1E38] md:text-6xl">
                Excelência clínica e estética para o seu melhor sorriso.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5A6B84] md:text-lg">
                Há mais de 25 anos, a Allegra une equipe multidisciplinar, tecnologia digital e
                atendimento humanizado em São Paulo — do check-up à reabilitação oral completa.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Planejamento digital: você visualiza o resultado antes de começar",
                  "Equipe de especialistas com CROSP e experiência comprovada",
                  "Day Clinic: tratamento em 1 dia para casos indicados",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-[#33475F]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0E2A4E]">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition hover:bg-[#1FB857]"
                >
                  Agendar avaliação
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#tratamentos"
                  className="inline-flex items-center gap-2 rounded-full border border-[#C9BFA9] bg-white px-7 py-3.5 text-sm font-semibold text-[#0E2A4E] transition hover:border-[#B8935F]"
                >
                  Ver tratamentos
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[#E7E0D2] pt-6">
                <div>
                  <Stars />
                  <p className="mt-1.5 text-[13px] text-[#5A6B84]">
                    <strong className="text-[#0E2A4E]">4.9 no Google</strong> · centenas de avaliações
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {doctors.slice(0, 4).map((d) => (
                      <div key={d.name} className="h-9 w-9 overflow-hidden rounded-full border-2 border-[#FAF8F4] bg-[#0E2A4E]">
                        <DoctorPhoto images={d.images} name={d.name} className="h-full w-full" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[13px] leading-snug text-[#5A6B84]">
                    <strong className="text-[#0E2A4E]">10.000+ sorrisos</strong>
                    <br />
                    transformados
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[1.75rem] shadow-2xl shadow-[#0E2A4E]/15">
                <img
                  src={ASSETS.hero}
                  alt="Consultório digital da Allegra Odontologia"
                  className="aspect-[4/4.4] w-full object-cover md:aspect-[4/4]"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -left-3 rounded-2xl border border-[#E7E0D2] bg-white/95 p-4 shadow-xl backdrop-blur md:-left-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E2A4E]">
                    <Scan className="h-5 w-5 text-[#E9DCC3]" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0E2A4E]">Planejamento digital 3D</p>
                    <p className="text-xs text-[#5A6B84]">Previsibilidade em cada caso</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="absolute -top-4 -right-2 rounded-2xl bg-[#0E2A4E] px-5 py-3.5 text-white shadow-xl md:-right-4"
              >
                <p className="font-display text-2xl leading-none">25+</p>
                <p className="mt-1 text-[11px] tracking-[0.14em] text-white/70 uppercase">anos de excelência</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------ stats bar ------------------------------ */}
        <section className="bg-[#0E2A4E]">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-y-8 px-4 py-10 md:px-8 lg:grid-cols-4">
            {[
              ["25+", "anos de história"],
              ["10.000+", "pacientes atendidos"],
              ["18", "tratamentos e especialidades"],
              ["3", "unidades em SP"],
            ].map(([n, label], i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center lg:border-l lg:border-white/10 lg:first:border-0"
              >
                <p className="font-display text-4xl text-[#E9DCC3] md:text-[2.75rem]">{n}</p>
                <p className="mt-1 text-[13px] tracking-wide text-white/65">{label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ----------------------------- treatments ----------------------------- */}
        <section id="tratamentos" className="scroll-mt-24">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Tratamentos"
                title="Todas as especialidades em um só lugar."
                desc="Da estética à reabilitação complexa: cada tratamento segue protocolos digitais com diagnóstico preciso e plano personalizado."
              />
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E2A4E] underline decoration-[#B8935F] decoration-2 underline-offset-4 hover:text-[#B8935F]"
              >
                Falar com especialista <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <motion.article
                  key={s.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="group overflow-hidden rounded-2xl border border-[#E7E0D2] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0E2A4E]/10"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-white/92 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#0E2A4E] uppercase backdrop-blur">
                      {s.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-[#0E2A4E]">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5A6B84]">{s.desc}</p>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#8A6E35] transition group-hover:gap-2.5"
                    >
                      Agendar avaliação <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[#E7E0D2] bg-white p-6 md:p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#8A6A3B] uppercase">
                Cobertura completa
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {allSpecialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[#E7E0D2] bg-[#FAF8F4] px-3.5 py-1.5 text-[13px] text-[#33475F]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------ featured: lentes ------------------------ */}
        <section className="border-y border-[#E7E0D2] bg-white">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#B8935F]" />
                <p className="text-xs font-semibold tracking-[0.22em] text-[#B8935F] uppercase">
                  Carro-chefe · Lentes de porcelana
                </p>
              </div>
              <h2 className="mt-4 font-display text-3xl leading-tight font-medium text-[#10233F] md:text-[2.75rem]">
                O tratamento que nos tornou referência em São Paulo.
              </h2>
              <p className="mt-4 leading-relaxed text-[#5A6B84]">
                Lâminas cerâmicas de 0,3 a 0,5 mm que corrigem cor, forma, tamanho e alinhamento —
                com resultado indistinguível do dente natural e durabilidade de 10 a 15 anos.
              </p>
              <ol className="mt-8 space-y-5">
                {[
                  ["01 · Avaliação completa", "Exames clínicos e radiográficos + escuta do seu objetivo."],
                  ["02 · Planejamento digital", "Você visualiza o novo sorriso antes de iniciar."],
                  ["03 · Mock-up de aprovação", "Ensaio do resultado direto na boca, sem compromisso."],
                  ["04 · Preparo minimamente invasivo", "Moldagem com scanner intraoral, sem massa."],
                  ["05 · Cimentação definitiva", "Protocolo adesivo de alta performance."],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-4">
                    <span className="font-display text-lg whitespace-nowrap text-[#B8935F]">
                      {t.split(" · ")[0]}
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold text-[#0E2A4E]">{t.split(" · ")[1]}</p>
                      <p className="text-sm text-[#5A6B84]">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0E2A4E] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#16345F]"
              >
                Quero meu planejamento digital <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://allegraodontologiaesaude.com/assets/service-lentes-porcelana-iFN6qZ_P.jpg"
                  alt="Lentes de porcelana na Allegra"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  ["10–15", "anos de durabilidade"],
                  ["3–4", "sessões em média"],
                  ["0,3mm", "espessura ultrafina"],
                ].map(([n, l]) => (
                  <div key={l} className="rounded-2xl border border-[#E7E0D2] bg-[#FAF8F4] p-4 text-center">
                    <p className="font-display text-2xl text-[#0E2A4E]">{n}</p>
                    <p className="mt-1 text-xs text-[#5A6B84]">{l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ---------------------------- technology ---------------------------- */}
        <section id="tecnologia" className="scroll-mt-24 bg-[#0A1C33]">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8 md:py-28">
            <SectionHeading
              dark
              eyebrow="Tecnologia"
              title="A clínica mais tecnológica de São Paulo."
              desc="Diagnóstico digital, laboratório próprio e equipamentos de última geração — mais precisão, menos sessões, mais conforto."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {techCards.map((t, i) => (
                <motion.div
                  key={t.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
                >
                  <img src={t.img} alt={t.title} loading="lazy" className="h-44 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="font-display text-lg text-white">{t.title}</h3>
                    <p className="mt-1 text-sm text-white/65">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {techList.map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80"
                >
                  <Zap className="h-4 w-4 shrink-0 text-[#D8C49A]" />
                  {t}
                </div>
              ))}
            </div>
            {/* day clinic strip */}
            <div className="mt-10 grid items-center gap-8 rounded-2xl border border-[#B8935F]/30 bg-gradient-to-br from-[#12294D] to-[#0A1C33] p-8 md:grid-cols-[1fr_auto] md:p-10">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#D8C49A] uppercase">
                  Day Clinic · ideal para quem tem medo de dentista
                </p>
                <h3 className="mt-3 font-display text-2xl text-white md:text-3xl">
                  Tratamento completo em 24h, enquanto você dorme.
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
                  Diagnóstico prévio, sedação consciente e equipe multidisciplinar — para quem tem
                  odontofobia ou pouco tempo disponível.
                </p>
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#B8935F] px-7 py-3.5 text-sm font-semibold text-[#0A1C33] transition hover:bg-[#D8C49A]"
              >
                Conhecer o Day Clinic <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* -------------------------------- team -------------------------------- */}
        <section id="equipe" className="scroll-mt-24">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8 md:py-28">
            <SectionHeading
              eyebrow="Equipe"
              title="Especialistas de verdade, com nome e CROSP."
              desc="Transparência total: conheça quem vai cuidar do seu sorriso, sua formação e sua área de atuação."
            />
            {/* featured doctor */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mt-12 grid overflow-hidden rounded-2xl border border-[#E7E0D2] bg-white md:grid-cols-2"
            >
              <DoctorPhoto
                images={doctors[0].images}
                name={doctors[0].name}
                className="h-72 w-full md:h-full md:min-h-[380px]"
              />
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F4EEE1] px-4 py-1.5 text-xs font-semibold text-[#7A6535]">
                  <Award className="h-3.5 w-3.5" /> Fundador · {doctors[0].exp}
                </div>
                <h3 className="mt-4 font-display text-3xl text-[#0E2A4E]">{doctors[0].name}</h3>
                <p className="mt-1 text-sm font-medium text-[#8A6E35]">
                  {doctors[0].role} · {doctors[0].crosp}
                </p>
                <p className="mt-4 leading-relaxed text-[#5A6B84]">{doctors[0].bio}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Lentes de porcelana", "Reabilitação oral", "Odontologia digital"].map((t) => (
                    <span key={t} className="rounded-full border border-[#E7E0D2] px-3 py-1 text-xs text-[#33475F]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            {/* other doctors */}
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {doctors.slice(1).map((d, i) => (
                <motion.article
                  key={d.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="overflow-hidden rounded-2xl border border-[#E7E0D2] bg-white transition hover:shadow-lg hover:shadow-[#0E2A4E]/8"
                >
                  <DoctorPhoto images={d.images} name={d.name} className="aspect-square w-full" />
                  <div className="p-5">
                    <h3 className="font-display text-lg leading-snug text-[#0E2A4E]">{d.name}</h3>
                    <p className="mt-1 text-[13px] font-medium text-[#8A6E35]">{d.role}</p>
                    <p className="text-xs text-[#5A6B84]">
                      {d.crosp} · {d.exp}
                    </p>
                    <p className="mt-3 text-[13px] leading-relaxed text-[#5A6B84]">{d.bio}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------- cases -------------------------------- */}
        <section id="casos" className="scroll-mt-24 border-y border-[#E7E0D2] bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8 md:py-28">
            <SectionHeading
              eyebrow="Casos clínicos"
              title="Resultados reais. Arraste e compare."
              desc="Antes e depois de pacientes reais da Allegra. Interaja com o comparador para ver a transformação em detalhes."
            />
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <BeforeAfter
                  before={cases[activeCase].before}
                  after={cases[activeCase].after}
                  name={cases[activeCase].name}
                />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="font-display text-xl text-[#0E2A4E]">{cases[activeCase].name}</p>
                    <p className="text-sm text-[#8A6E35]">{cases[activeCase].treatment}</p>
                  </div>
                  <Microscope className="h-5 w-5 text-[#B8935F]" />
                </div>
              </motion.div>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
                {cases.map((c, i) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setActiveCase(i)}
                    className={`flex items-center gap-4 rounded-2xl border p-3 text-left transition ${
                      activeCase === i
                        ? "border-[#B8935F] bg-[#FBF6EA] shadow-md"
                        : "border-[#E7E0D2] bg-[#FAF8F4] hover:border-[#C9BFA9]"
                    }`}
                  >
                    <img
                      src={c.portrait}
                      alt={c.name}
                      loading="lazy"
                      className="h-16 w-16 shrink-0 rounded-xl object-cover"
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-[#0E2A4E]">{c.name}</p>
                      <p className="truncate text-xs text-[#5A6B84]">{c.treatment}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------ structure ------------------------------ */}
        <section id="estrutura" className="scroll-mt-24">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8 md:py-28">
            <SectionHeading
              eyebrow="Estrutura"
              title="Um ambiente à altura do seu sorriso."
              desc="Recepção acolhedora, consultórios digitais e sala VIP — estrutura pensada para conforto e privacidade."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-[1.45fr_1fr]">
              <motion.div
                key={galleryIndex}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img
                  src={clinicImages[galleryIndex].src}
                  alt={clinicImages[galleryIndex].label}
                  className="aspect-[16/11] w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-black/55 px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur">
                  {clinicImages[galleryIndex].label}
                </span>
              </motion.div>
              <div className="grid grid-cols-3 gap-3 lg:grid-cols-2">
                {clinicImages.map((c, i) => (
                  <button
                    key={c.src}
                    type="button"
                    onClick={() => setGalleryIndex(i)}
                    className={`overflow-hidden rounded-xl border-2 transition ${
                      galleryIndex === i ? "border-[#B8935F]" : "border-transparent opacity-80 hover:opacity-100"
                    }`}
                    aria-label={`Ver foto: ${c.label}`}
                  >
                    <img src={c.src} alt={c.label} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------- testimonials ---------------------------- */}
        <section className="border-y border-[#E7E0D2] bg-[#F4EEE1]/60">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8 md:py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Depoimentos"
                title="Quem passou por aqui, recomenda."
              />
              <div className="flex items-center gap-2 rounded-full border border-[#E0D7C3] bg-white px-4 py-2">
                <Stars />
                <span className="text-[13px] font-semibold text-[#0E2A4E]">4.9 · Google Reviews</span>
              </div>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {testimonials.map((t, i) => (
                <motion.figure
                  key={t.text.slice(0, 24)}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex flex-col rounded-2xl border border-[#E7E0D2] bg-white p-6"
                >
                  <Stars />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[#33475F]">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-[#EFE8D8] pt-4">
                    <p className="text-sm font-semibold text-[#0E2A4E]">{t.name}</p>
                    <p className="text-xs text-[#8A6E35]">{t.treatment}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------- units -------------------------------- */}
        <section id="unidades" className="scroll-mt-24">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8 md:py-28">
            <SectionHeading
              eyebrow="Unidades"
              title="Perto de você, onde for mais conveniente."
              desc="Três unidades com o mesmo padrão Allegra de tecnologia, biossegurança e atendimento."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {units.map((u, i) => (
                <motion.article
                  key={u.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="overflow-hidden rounded-2xl border border-[#E7E0D2] bg-white"
                >
                  <iframe
                    title={`Mapa — Allegra ${u.name}`}
                    src={u.map}
                    className="h-44 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#B8935F]" />
                      <h3 className="font-display text-xl text-[#0E2A4E]">Allegra {u.name}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#5A6B84]">{u.address}</p>
                    <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#0E2A4E]">
                      <Phone className="h-3.5 w-3.5 text-[#B8935F]" /> {u.phone}
                    </p>
                    <div className="mt-5 flex gap-2.5">
                      <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 rounded-full bg-[#0E2A4E] px-4 py-2.5 text-center text-[13px] font-semibold text-white transition hover:bg-[#16345F]"
                      >
                        Agendar aqui
                      </a>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(u.address)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 rounded-full border border-[#C9BFA9] px-4 py-2.5 text-center text-[13px] font-semibold text-[#0E2A4E] transition hover:border-[#B8935F]"
                      >
                        Como chegar
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------------- faq --------------------------------- */}
        <section className="border-t border-[#E7E0D2] bg-white">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Dúvidas frequentes"
                title="Perguntas que ouvimos todos os dias."
              />
              <p className="mt-4 text-[#5A6B84]">
                Não encontrou sua dúvida? Fale direto com nossa equipe no WhatsApp — respondemos rápido.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1FB857]"
              >
                Perguntar no WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="divide-y divide-[#E7E0D2] rounded-2xl border border-[#E7E0D2] bg-[#FAF8F4] px-6">
              {faqs.map((f, i) => (
                <div key={f.q} className="py-1">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-[15px] font-semibold text-[#0E2A4E]">{f.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${
                        openFaq === i
                          ? "border-[#B8935F] bg-[#B8935F] text-white"
                          : "border-[#D8CFBB] text-[#8A6E35]"
                      }`}
                    >
                      <ChevronDown className={`h-4 w-4 transition ${openFaq === i ? "rotate-180" : ""}`} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm leading-relaxed text-[#5A6B84]">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------ final cta ------------------------------ */}
        <section className="relative overflow-hidden bg-[#0A1C33]">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(#D8C49A 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#D8C49A] uppercase">
                Vagas limitadas por semana
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-white md:text-5xl">
                Pronto para transformar seu sorriso com quem é referência?
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Agende sua avaliação hoje e receba um plano de tratamento personalizado, com
                orçamento transparente e condições especiais de pagamento.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-[#D8C49A]" /> Primeira avaliação completa
                </span>
                <span className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-[#D8C49A]" /> Atendimento humanizado
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#D8C49A]" /> Biossegurança certificada
                </span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/[0.05] p-8 text-center backdrop-blur">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#D8C49A] uppercase">
                Agende sua avaliação
              </p>
              <p className="mt-3 font-display text-2xl text-white">Comece pelo WhatsApp</p>
              <p className="mt-2 text-sm text-white/60">Resposta rápida · Seg–Sáb</p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1FB857]"
              >
                Chamar no WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+551135628744"
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#D8C49A]"
              >
                <Phone className="h-4 w-4" /> (11) 3562-8744
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* -------------------------------- footer -------------------------------- */}
      <footer className="bg-[#060F1F] text-white/70">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 md:px-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <img src={ASSETS.logoLight} alt="Allegra Odontologia" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Saúde e estética bucal com excelência há mais de 25 anos. Tecnologia digital,
              equipe multidisciplinar e cuidado humanizado.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Stars />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#D8C49A] uppercase">Tratamentos</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Lentes de Porcelana", "Implantes Dentários", "Prótese Protocolo", "Endodontia", "Harmonização Facial", "Day Clinic"].map(
                (t) => (
                  <li key={t}>
                    <a href="#tratamentos" className="transition hover:text-white">
                      {t}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#D8C49A] uppercase">Unidades</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>Tatuapé — R. Padre Estêvão Pernet, 175</li>
              <li>Itaim Bibi — Av. República do Líbano, 1673</li>
              <li>Itapevi — R. Américo V. Cristianini, 10</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#D8C49A] uppercase">Contato</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>(11) 3562-8744 · (11) 96172-4207</li>
              <li>allegraodonto@gmail.com</li>
              <li>Seg–Sex 8h–19h · Sáb 8h–12h</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-5 text-xs text-white/45 md:px-8">
            <p>© {new Date().getFullYear()} Allegra Odontologia · CNPJ 05.631.799/0001-38</p>
            <p>RT Dr. Rodolfo Segawa · CROSP 61.148 · CROSP-CL 20.602</p>
          </div>
        </div>
      </footer>

      {/* floating whatsapp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
        className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25 transition hover:scale-105"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
