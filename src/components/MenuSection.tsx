import { MENU, formatPriceEUR } from "@/data/menu";

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-pizza-600 font-display text-lg font-light tracking-widest uppercase mb-2">
            Notre carte
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900">
            Menu
          </h2>
          <p className="text-slate-600 mt-3">
            Prix susceptibles d’évoluer. N’hésitez pas à nous appeler pour confirmer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {MENU.map((section) => (
            <div key={section.id} className="card p-6">
              <div className="mb-5">
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  {section.title}
                </h3>
                {section.subtitle ? (
                  <p className="text-slate-500 mt-1">{section.subtitle}</p>
                ) : null}
              </div>

              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={`${section.id}-${item.name}`} className="flex gap-4">
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-semibold text-slate-900">{item.name}</p>

                        <p className="font-semibold text-slate-900 whitespace-nowrap">
                          {typeof item.price === "number"
                            ? formatPriceEUR(item.price)
                            : item.priceNote ?? ""}
                        </p>
                      </div>

                      {item.description ? (
                        <p className="text-sm text-slate-500 mt-1">
                          {item.description}
                        </p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}