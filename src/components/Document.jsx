import React from 'react'

export default function Document() {


  return (
    <div className="bg-white py-8 px-6 rounded-lg shadow-md flex gap-8">
          <img src="/family.png" alt="Document cover" className="" />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl text-secondary font-semibold">
              Die Immobilie in der Scheidung
            </h3>
            <p className="text-primary text-sm">
              RATGEBER, SCHEIDUNG, EHERECHT
            </p>
            <p>
              Eine Erbimmobilie kann die familiäre und wirtschaftliche Situation
              verändern. In diesem Ratgeber verraten wir Ihnen, wie Sie sich im
              Urwald von Handlungsmöglichkeiten zurecht finden und teilen mit
              Ihnen den aktuellen Wissensstand. Auch der Immobilienwert spielt
              eine wichtige Rolle. Sollten Sie den Wert noch nicht ermittelt
              haben, können Sie diesen mit unserer Marktwertanalyse schnell und
              unverbindlich online berechnen lassen.
            </p>
            <div className="flex justify-between items-center mt-6 xl:text-base lg:text-sm">
              <div>
                <p className="text-gray font-thin">Sietenanzahl</p>
                <div className="flex gap-1">
                  <img src="/multiple-pages.svg" alt="copy" />
                  <p className="text-secondary">52 Seiten</p>
                </div>
              </div>
              <div>
                <p className="text-gray font-thin">Letztes Update</p>
                <div className="flex gap-1 items-center">
                  <img src="/stopwatch.svg" alt="stopwatch" className="h-3.5"/>
                  <p className="text-secondary">18.06.2024</p>
                </div>
              </div>
              <div>
                <p className="text-gray font-thin">Dateiformat</p>
                <div className="flex gap-1">
                  <img src="/adobe.svg" alt="adobe"  />
                  <p className="text-secondary">PDF</p>
                </div>
              </div>
              <div className="flex xl:gap-6 lg:gap-3">
              <div className="bg-primary text-white rounded-xl py-4 xl:px-6 lg:px-4 hover:bg-secondary lg:text-sm">
                Download anfordern
              </div>
              <img src="/heart.svg" alt="like" className=""/>

              </div>
            </div>
          </div>
        </div>
  )
}
