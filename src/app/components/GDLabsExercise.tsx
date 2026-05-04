import { Link } from "react-router";
import { ArrowLeft, FileText, Film, Image as ImageIcon } from "lucide-react";

import docPdf from "../../imports/lab-doc-practice.pdf";
import thinking1 from "../../imports/lab-thinking-1.jpeg";
import thinking2 from "../../imports/lab-thinking-2.jpeg";
import thinking3 from "../../imports/lab-thinking-3.jpeg";
import thinking4 from "../../imports/lab-thinking-4.png";
import thinking5 from "../../imports/lab-thinking-5.png";
import thinking6 from "../../imports/lab-thinking-6.jpeg";
import gameJamVideo from "../../imports/lab-game-jam.mp4";
import kitbashBefore from "../../imports/lab-kitbash-before.png";
import kitbashAfter from "../../imports/lab-kitbash-after.png";

const thinkingImages = [
  thinking1,
  thinking2,
  thinking3,
  thinking4,
  thinking5,
  thinking6,
];

function YouTubeEmbed({ src }: { src: string }) {
  return (
    <div className="aspect-video rounded-xl overflow-hidden border border-purple-500/20 bg-slate-950">
      <iframe
        src={src}
        className="w-full h-full"
        allowFullScreen
      />
    </div>
  );
}

export default function GDLabsExercise() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <Link
          to="/exercises"
          className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 mb-12"
        >
          <ArrowLeft size={20} />
          Back to Exercises
        </Link>

        {/* Header */}
        <section className="mb-14">
          <h1 className="text-5xl text-white mb-6">
            Game Development Lab Archive
          </h1>

          <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-6">
            <p className="text-purple-300 text-sm mb-1">Course Info</p>
            <p className="text-white">
              CGT 25500 - Game Development II: Design And Psychology
            </p>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Lab 01 */}
          <LabCard number="01" title="Documentation Practice" icon={<FileText size={20}/>}>
            <iframe src={docPdf} className="w-full h-[400px]" />
          </LabCard>

          {/* Lab 02 */}
          <LabCard number="02" title="Simple AI, Arrays" icon={<Film size={20}/>}>
            <YouTubeEmbed src="https://www.youtube.com/embed/khgnu0S1E0A" />
          </LabCard>

          {/* Lab 03 */}
          <LabCard number="03" title="Thinking in Systems" icon={<ImageIcon size={20}/>}>
            <div className="flex gap-4 overflow-x-auto">
              {thinkingImages.map((img, i) => (
                <img key={i} src={img} className="h-72 rounded-lg" />
              ))}
            </div>
          </LabCard>

          {/* Lab 04（原 Lab 05） */}
          <LabCard number="04" title="Data Table / Procedural Design" icon={<Film size={20}/>}>
            <YouTubeEmbed src="https://www.youtube.com/embed/EleTkesuhJE" />
          </LabCard>

          {/* Lab 05（原 Lab 06） */}
          <LabCard number="05" title="Game Audio Basics" icon={<Film size={20}/>}>
            <YouTubeEmbed src="https://www.youtube.com/embed/sesb6FwdtbQ" />
          </LabCard>

          {/* Lab 06（原 Lab 07） */}
          <LabCard number="06" title="Game Jam" icon={<Film size={20}/>}>
            <video src={gameJamVideo} controls className="w-full rounded-xl" />
          </LabCard>

          {/* Lab 07（原 Lab 08） */}
          <LabCard number="07" title="Kit Bashing" icon={<ImageIcon size={20}/>}>
            <div className="grid md:grid-cols-2 gap-4">
              <img src={kitbashBefore} className="rounded-xl" />
              <img src={kitbashAfter} className="rounded-xl" />
            </div>
          </LabCard>

        </div>
      </div>
    </div>
  );
}

function LabCard({
  number,
  title,
  icon,
  children
}: {
  number: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-purple-300 text-sm">Lab {number}</p>
          <h2 className="text-white text-xl">{title}</h2>
        </div>
        <div className="text-purple-300">{icon}</div>
      </div>

      {children}
    </div>
  );
}