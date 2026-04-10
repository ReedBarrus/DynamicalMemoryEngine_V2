const appNode = document.querySelector<HTMLDivElement>("#app");

if (appNode === null) {
    throw new Error("Local browser bootstrap v0 could not find #app.");
}

document.body.style.margin = "0";
document.body.style.background = "#f4f0e8";
document.body.style.color = "#1f1a17";
document.body.style.fontFamily = "Georgia, 'Times New Roman', serif";

appNode.innerHTML = `
  <main style="min-height: 100vh; display: grid; place-items: center; padding: 24px;">
    <section style="width: min(560px, 100%); border: 1px solid #cdbfa9; background: rgba(255,255,255,0.78); padding: 24px; box-shadow: 0 18px 40px rgba(68, 52, 39, 0.10);">
      <div style="font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: #7b6756;">
        Local Shell Bootstrap v0
      </div>
      <h1 style="margin: 12px 0 8px; font-size: 32px; line-height: 1.1;">
        Dynamical Memory Engine
      </h1>
      <p style="margin: 0; font-size: 16px; line-height: 1.6;">
        Browser shell root mounted. No execution, intake, plane building, or rendering logic is hosted here yet.
      </p>
    </section>
  </main>
`;
