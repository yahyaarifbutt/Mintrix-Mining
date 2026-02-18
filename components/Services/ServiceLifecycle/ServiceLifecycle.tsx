import { lifecycleSteps } from "./lifecycleSteps";
import LifecycleHeader from "./LifecycleHeader";
import LifecycleStep from "./LifecycleStep";

export default function ServiceLifecycle() {
  return (
    <section className="w-full bg-white py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-5/12">
            <LifecycleHeader />
          </div>
          <div className="w-full lg:w-7/12 space-y-16">
            {lifecycleSteps.map((step, index) => (
              <LifecycleStep
                key={index}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
