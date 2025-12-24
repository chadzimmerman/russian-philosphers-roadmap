# 🇷🇺 Russian Philosophy Roadmap

An interactive, state-driven learning path built with **React Flow**. This project serves as a technical deep-dive into graph-based UI architecture, using the complex history of Russian Philosophical thought as a rich data model.

## 🎯 Project Overview

This project was born out of a desire to master **React Flow** by applying it to a personal passion: Russian Philosophy. Instead of a standard "to-do list," I built an interactive "Syllabus" that mirrors the way information is actually consumed—one step at a time, where new ideas are unlocked by understanding their predecessors.

### Key Technical Challenges Overcome:

- **Directed Acyclic Graph (DAG) Logic**: Implemented a progression system where nodes (philosophers) remain locked until their intellectual "parents" are completed.
- **Custom Node Architecture**: Developed a specialized React component (`PhilosopherNode`) to render metadata including key works and a "takeaway" summary for the user.
- **Spatial Optimization**: Manually engineered a coordinate system for 25 nodes to ensure a readable, non-overlapping tree structure across a massive canvas.
- **Dynamic State Management**: Managed synchronized updates across the nodes and edges arrays to trigger animations and visual unlocks.

---

## 🛠️ Technical Stack

- **React.js**: Functional components and Hooks (`useState`).
- **React Flow**: For the interactive infinite canvas, panning, and zooming.
- **Vite**: For an optimized, lightning-fast development environment.
- **Lucide React**: Integrated for clean, modern iconography.

---

## 📚 Philosophical Structure

The roadmap follows the "Golden Age" of Russian thought, branching from early foundations into specialized schools:

| Branch             | Description                                | Key Figures                   |
| :----------------- | :----------------------------------------- | :---------------------------- |
| **Foundations**    | The birth of the Russian idea and history. | Chaadaev, Khomiakov           |
| **Existentialism** | Radical freedom and psychological depth.   | Dostoevsky, Shestov, Berdyaev |
| **Metaphysics**    | The study of Divine Wisdom (Sophiology).   | Solovyov, Florensky, Bulgakov |
| **Synthesis**      | Final historical and religious summaries.  | Zenkovsky, Fedotov            |

> _"Russian philosophy is a coherent tradition, not a series of accidents."_ — V.V. Zenkovsky

---

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/russian-philosophy-roadmap.git](https://github.com/YOUR_USERNAME/russian-philosophy-roadmap.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```

---

## 👨‍💻 Author’s Note

This project represents my dual interest in **Software Engineering** and **Philosophy**. By mapping the non-linear, often contradictory world of Russian thought into a structured React application, I practiced how to translate complex, qualitative data into a clean and intuitive user experience.
