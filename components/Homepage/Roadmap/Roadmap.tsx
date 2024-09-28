export default function Roadmap() {
  return (
    <div className="bg-[#dbfbf6] py-16">
      {/* Heading */}
      <h1 className="text-center text-3xl font-semibold tracking-wide text-gray-800 mb-12">
        ROADMAP
      </h1>

      {/* Timeline container */}
      <div className="relative container mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-[90%] w-0.5 bg-gray-200"></div>

        {/* Roadmap events */}
        <div className="space-y-16">
          {/* Now */}
          <div className="flex justify-between items-center w-full">
            {/* Left side event */}
            <div className="w-5/12 text-right">
              <h3 className="inline-block text-xl font-semibold text-gray-700 bg-teal-200 px-4 py-1 rounded-full">
                NOW
              </h3>
              <div className="flex flex-col gap-3">
                <p className="text-sm text-gray-600 mt-2">
                  Team and Project Building
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  $FADE fair Launch on movepump
                </p>

                <p className="text-sm text-gray-600 mt-2">
                  Fade Network Alpha Launch
                </p>
              </div>
            </div>

            {/* Circle indicator in the center */}
            <div className="flex justify-center w-2/12 relative">
              <div className="h-6 w-6 bg-teal-300 rounded-full z-10"></div>
            </div>

            {/* Empty right side */}
            <div className="w-5/12"></div>
          </div>

          {/* Early Q4 2024 */}
          <div className="flex justify-between items-center w-full">
            {/* Empty left side */}
            <div className="w-5/12"></div>

            {/* Circle indicator in the center */}
            <div className="flex justify-center w-2/12 relative">
              <div className="h-6 w-6 bg-teal-300 rounded-full z-10"></div>
            </div>

            {/* Right side event */}
            <div className="w-5/12 text-left">
              <h3 className="text-xl font-semibold text-gray-700">
                Early Q4 2024
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Option Trading/Activities Bet
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Major Upgrades in UI/UX
              </p>
            </div>
          </div>

          {/* TBA */}
          <div className="flex justify-between items-center w-full">
            {/* Left side event */}
            <div className="w-5/12 text-right">
              <h3 className="text-xl font-semibold text-gray-700">TBA</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details to be announced.
              </p>
            </div>

            {/* Circle indicator in the center */}
            <div className="flex justify-center w-2/12 relative">
              <div className="h-6 w-6 bg-teal-300 rounded-full z-10"></div>
            </div>

            {/* Empty right side */}
            <div className="w-5/12"></div>
          </div>

          {/* "Soon" section */}
          <div className="text-center pt-16">
            <h2 className="text-4xl font-semibold text-gray-700">Soon</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
