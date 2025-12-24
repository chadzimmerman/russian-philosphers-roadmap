import React, { useState } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

// 1. THIS WAS MISSING: Define the nodeTypes mapping
const PhilosopherNode = ({ data }) => {
  const isLocked = !data.unlocked;
  const isRead = data.status === "read";

  return (
    <div
      style={{
        padding: "15px",
        borderRadius: "12px",
        border: `2px solid ${isLocked ? "#1e293b" : "#3b82f6"}`,
        backgroundColor: isLocked ? "#0f172a" : "#1e293b",
        color: "white",
        width: "220px",
        textAlign: "center",
        opacity: isLocked ? 0.3 : 1,
        transition: "all 0.4s ease",
        boxShadow: isLocked ? "none" : "0 0 20px rgba(59, 130, 246, 0.2)",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "14px",
          color: isLocked ? "#64748b" : "#fff",
        }}
      >
        {data.label}
      </div>
      <div
        style={{
          fontSize: "11px",
          color: "#94a3b8",
          marginTop: "4px",
          fontStyle: "italic",
        }}
      >
        {data.work}
      </div>

      {!isLocked && (
        <>
          <div
            style={{
              marginTop: "10px",
              padding: "8px",
              background: "rgba(0,0,0,0.2)",
              borderRadius: "6px",
              fontSize: "10px",
              color: "#cbd5e1",
              textAlign: "left",
              borderLeft: "2px solid #3b82f6",
            }}
          >
            <strong>Take from him:</strong> {data.summary}
          </div>
          <button
            onClick={() => data.onRead(data.id)}
            style={{
              marginTop: "12px",
              width: "100%",
              fontSize: "10px",
              padding: "6px",
              backgroundColor: isRead ? "#16a34a" : "#2563eb",
              border: "none",
              borderRadius: "4px",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {isRead ? "✓ COMPLETED" : "MARK AS READ"}
          </button>
        </>
      )}
    </div>
  );
};

const nodeTypes = { philosopher: PhilosopherNode };

const initialNodes = [
  {
    id: "intro",
    type: "philosopher",
    position: { x: 600, y: 0 },
    data: {
      id: "intro",
      label: "Intro: What Is Russian Philosophy?",
      work: "Core Concepts",
      summary: "The unique synthesis of Orthodoxy, Nous, and Ethics.",
      unlocked: true,
      unlocks: ["chaadaev"],
    },
  },
  {
    id: "chaadaev",
    type: "philosopher",
    position: { x: 600, y: 180 },
    data: {
      id: "chaadaev",
      label: "Chaadaev",
      work: "Philosophical Letters",
      summary: "Russia must be evaluated by truth, not nationalism.",
      unlocks: ["slavophiles", "belinsky", "kireevsky"],
    },
  },
  {
    id: "slavophiles",
    type: "philosopher",
    position: { x: 200, y: 380 },
    data: {
      id: "slavophiles",
      label: "Khomiakov",
      work: "On the Western Confessions",
      summary: "Truth is known together (Sobornost), not individually.",
      unlocks: ["dostoevsky", "tolstoy", "aksakov"],
    },
  },
  {
    id: "kireevsky",
    type: "philosopher",
    position: { x: 600, y: 380 },
    data: {
      id: "kireevsky",
      label: "Kireevsky",
      work: "European Culture",
      summary: "Reason must include intuition and lived experience.",
      unlocks: ["lossky"],
    },
  },
  {
    id: "belinsky",
    type: "philosopher",
    position: { x: 1000, y: 380 },
    data: {
      id: "belinsky",
      label: "Belinsky",
      work: "Literary Criticism",
      summary: "The ethical urgency that leads to revolt.",
      unlocks: ["leontiev"],
    },
  },
  {
    id: "aksakov",
    type: "philosopher",
    position: { x: -150, y: 580 },
    data: {
      id: "aksakov",
      label: "Aksakov",
      work: "Slavophile Anthropology",
      summary: "Culture is an expression of spiritual anthropology.",
      unlocks: [],
    },
  },
  {
    id: "tolstoy",
    type: "philosopher",
    position: { x: 100, y: 580 },
    data: {
      id: "tolstoy",
      label: "Tolstoy",
      work: "The Kingdom of God...",
      summary: "Conscience as supreme authority; radical ethics.",
      unlocks: ["tolstoy_anarchism"],
    },
  },
  {
    id: "dostoevsky",
    type: "philosopher",
    position: { x: 350, y: 580 },
    data: {
      id: "dostoevsky",
      label: "Dostoevsky",
      work: "Notes from Underground",
      summary: "Freedom is terrifying; evil begins in distorted freedom.",
      unlocks: ["berdyaev", "shestov"],
    },
  },
  {
    id: "lossky",
    type: "philosopher",
    position: { x: 600, y: 580 },
    data: {
      id: "lossky",
      label: "Lossky",
      work: "Intuitive Basis...",
      summary: "Direct knowledge of being is possible.",
      unlocks: ["frank"],
    },
  },
  {
    id: "leontiev",
    type: "philosopher",
    position: { x: 850, y: 580 },
    data: {
      id: "leontiev",
      label: "Leontiev",
      work: "Byzantinism and Slavdom",
      summary: "Hierarchy and beauty preserve civilizations.",
      unlocks: ["rozanov", "merezhkovsky"],
    },
  },
  {
    id: "tolstoy_anarchism",
    type: "philosopher",
    position: { x: 100, y: 780 },
    data: {
      id: "tolstoy_anarchism",
      label: "Tolstoyan Anarchism",
      work: "Christian Pacifism",
      summary:
        "Removing sacrament and hierarchy leads to radical anti-statism.",
      unlocks: [],
    },
  },
  {
    id: "berdyaev",
    type: "philosopher",
    position: { x: 350, y: 780 },
    data: {
      id: "berdyaev",
      label: "Berdyaev",
      work: "Meaning of Creative Act",
      summary: "The person is prior to systems and laws.",
      unlocks: ["solovyov"],
    },
  },
  {
    id: "shestov",
    type: "philosopher",
    position: { x: 600, y: 780 },
    data: {
      id: "shestov",
      label: "Shestov",
      work: "All Things Are Possible",
      summary: "Truth begins where rational necessity collapses.",
      unlocks: [],
    },
  },
  {
    id: "frank",
    type: "philosopher",
    position: { x: 850, y: 780 },
    data: {
      id: "frank",
      label: "Semyon Frank",
      work: "The Unknowable",
      summary: "Being exceeds concepts, yet is genuinely knowable.",
      unlocks: ["trubetskoy"],
    },
  },
  {
    id: "merezhkovsky",
    type: "philosopher",
    position: { x: 1100, y: 780 },
    data: {
      id: "merezhkovsky",
      label: "Merezhkovsky",
      work: "Christ & Antichrist",
      summary: "History moves toward revelation and judgment.",
      unlocks: [],
    },
  },
  {
    id: "rozanov",
    type: "philosopher",
    position: { x: 850, y: 980 },
    data: {
      id: "rozanov",
      label: "Rozanov",
      work: "Fallen Leaves",
      summary: "The religious meaning of sexuality and family.",
      unlocks: [],
    },
  },
  {
    id: "solovyov",
    type: "philosopher",
    position: { x: 350, y: 1050 },
    data: {
      id: "solovyov",
      label: "Solovyov",
      work: "Divine Humanity",
      summary: "Christianity as cosmic reconciliation.",
      unlocks: ["bulgakov", "florensky", "ilyin", "vysheslavtsev"],
    },
  },
  {
    id: "trubetskoy",
    type: "philosopher",
    position: { x: 850, y: 1150 },
    data: {
      id: "trubetskoy",
      label: "Trubetskoy",
      work: "Meaning of Life",
      summary: "Meaning is grounded in the Logos.",
      unlocks: [],
    },
  },
  {
    id: "bulgakov",
    type: "philosopher",
    position: { x: -50, y: 1250 },
    data: {
      id: "bulgakov",
      label: "Bulgakov",
      work: "Philosophy of Economy",
      summary: "Matter and labor participate in divine meaning.",
      unlocks: [],
    },
  },
  {
    id: "florensky",
    type: "philosopher",
    position: { x: 200, y: 1250 },
    data: {
      id: "florensky",
      label: "Florensky",
      work: "Pillar and Ground...",
      summary: "Logic alone cannot reach truth; symbols are bridges.",
      unlocks: [],
    },
  },
  {
    id: "vysheslavtsev",
    type: "philosopher",
    position: { x: 450, y: 1250 },
    data: {
      id: "vysheslavtsev",
      label: "Vysheslavtsev",
      work: "Ethics of Eros",
      summary: "Ethics is transformed desire, not repression.",
      unlocks: [],
    },
  },
  {
    id: "ilyin",
    type: "philosopher",
    position: { x: 700, y: 1250 },
    data: {
      id: "ilyin",
      label: "Ilyin",
      work: "Resistance to Evil",
      summary: "Evil must be resisted concretely, not only spiritually.",
      unlocks: ["fedotov", "stepun"],
    },
  },
  {
    id: "stepun",
    type: "philosopher",
    position: { x: 1000, y: 1350 },
    data: {
      id: "stepun",
      label: "Stepun",
      work: "Tragedy of Russian Mind",
      summary: "Historical catastrophe reveals spiritual truth.",
      unlocks: [],
    },
  },
  {
    id: "fedotov",
    type: "philosopher",
    position: { x: 700, y: 1450 },
    data: {
      id: "fedotov",
      label: "Fedotov",
      work: "Religious Mind",
      summary: "The soul of a people is in its religious memory.",
      unlocks: ["zenkovsky"],
    },
  },
  {
    id: "zenkovsky",
    type: "philosopher",
    position: { x: 700, y: 1650 },
    data: {
      id: "zenkovsky",
      label: "Zenkovsky",
      work: "History of Philosophy",
      summary: "Russian philosophy is a coherent tradition.",
      unlocks: [],
    },
  },
];

const initialEdges = [
  { id: "e-intro-chaadaev", source: "intro", target: "chaadaev" },
  { id: "e-chaadaev-slav", source: "chaadaev", target: "slavophiles" },
  { id: "e-chaadaev-bel", source: "chaadaev", target: "belinsky" },
  { id: "e-chaadaev-kir", source: "chaadaev", target: "kireevsky" },
  { id: "e-slav-aks", source: "slavophiles", target: "aksakov" },
  { id: "e-slav-dos", source: "slavophiles", target: "dostoevsky" },
  { id: "e-slav-tol", source: "slavophiles", target: "tolstoy" },
  { id: "e-bel-leo", source: "belinsky", target: "leontiev" },
  { id: "e-kir-los", source: "kireevsky", target: "lossky" },
  { id: "e-leo-roz", source: "leontiev", target: "rozanov" },
  { id: "e-leo-mer", source: "leontiev", target: "merezhkovsky" },
  { id: "e-dos-ber", source: "dostoevsky", target: "berdyaev" },
  { id: "e-dos-she", source: "dostoevsky", target: "shestov" },
  { id: "e-tol-ana", source: "tolstoy", target: "tolstoy_anarchism" },
  { id: "e-los-fra", source: "lossky", target: "frank" },
  { id: "e-fra-tru", source: "frank", target: "trubetskoy" },
  { id: "e-ber-sol", source: "berdyaev", target: "solovyov" },
  { id: "e-sol-bul", source: "solovyov", target: "bulgakov" },
  { id: "e-sol-flo", source: "solovyov", target: "florensky" },
  { id: "e-sol-ily", source: "solovyov", target: "ilyin" },
  { id: "e-sol-vys", source: "solovyov", target: "vysheslavtsev" },
  { id: "e-ily-fed", source: "ilyin", target: "fedotov" },
  { id: "e-ily-ste", source: "ilyin", target: "stepun" },
  { id: "e-fed-zen", source: "fedotov", target: "zenkovsky" },
].map((edge) => ({ ...edge, style: { stroke: "#334155", strokeWidth: 2 } }));

export default function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onRead = (id) => {
    const nodeToMark = nodes.find((n) => n.id === id);
    if (!nodeToMark) return;

    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id)
          return { ...node, data: { ...node.data, status: "read" } };
        if (nodeToMark.data.unlocks.includes(node.id)) {
          return { ...node, data: { ...node.data, unlocked: true } };
        }
        return node;
      })
    );

    setEdges((eds) =>
      eds.map((edge) =>
        edge.source === id
          ? {
              ...edge,
              animated: true,
              style: { stroke: "#3b82f6", strokeWidth: 3 },
            }
          : edge
      )
    );
  };

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#020617" }}>
      <ReactFlow
        nodes={nodes.map((n) => ({ ...n, data: { ...n.data, onRead } }))}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background color="#1e293b" gap={25} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
