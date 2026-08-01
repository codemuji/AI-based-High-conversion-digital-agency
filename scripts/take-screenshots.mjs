import { execSync } from "child_process";

const sites = [
  { url: "https://eleganceofindia.com/", file: "public/images/elegance_of_india.png" },
  { url: "https://hydroenergyindia.com/", file: "public/images/hydro_energy_india.png" },
  { url: "https://purbodix.com/", file: "public/images/purbodix.png" },
  { url: "https://blazeonme.com/", file: "public/images/blaze_on_me.png" },
  { url: "http://baruahtravels.com/", file: "public/images/baruah_travels.png" },
  { url: "https://indiawebdesigns.online/G.K.Equipment/", file: "public/images/gk_equipment.png" }
];

console.log("Starting screenshot capture for live client websites...");

for (const site of sites) {
  try {
    console.log(`Capturing ${site.url} -> ${site.file}`);
    execSync(`npx playwright screenshot --channel msedge --viewport-size="1280, 800" --timeout=30000 "${site.url}" "${site.file}"`, {
      stdio: "inherit"
    });
    console.log(`✓ Saved ${site.file}`);
  } catch (err) {
    console.error(`✗ Error capturing ${site.url}:`, err.message);
  }
}

console.log("All screenshot captures attempted.");
