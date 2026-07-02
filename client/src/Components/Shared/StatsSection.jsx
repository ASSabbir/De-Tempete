// shared/StatsSection.jsx
import { AnimatedCounter } from "./AnimatedCounter";

export const StatsSection = ({ stats, bgColor = "bg-[#F5F6F8]", maxWidth = "max-w-[1600px]" }) => (
  <section className={`${bgColor} py-10`}>
    <div className={`${maxWidth} mx-auto px-6`}>
      <div className="grid lg:grid-cols-5 gap-10 items-center">
        <div>
          <h2 className="text-[#14224A] text-2xl lg:text-3xl font-bold">Why Choose Us?</h2>
        </div>
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="flex items-center gap-5">
              <Icon size={70} className="text-[#14224A] stroke-[1.2]" />
              <div>
                <h3 className="text-[#14224A] text-4xl font-bold">
                  <AnimatedCounter end={s.end} duration={s.duration || 2000} />+
                </h3>
                <p className="text-[#14224A] text-xl font-medium">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);