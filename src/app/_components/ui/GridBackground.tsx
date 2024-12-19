export const GridBackground = () => {
  // Create enough rows and columns to cover viewport
  const rows = Array.from({ length: 12 });
  const cols = Array.from({ length: 6 });

  const getColor = (rowIndex: number, colIndex: number) => {
    const isOddRow = rowIndex % 2 === 1;
    const basePosition = colIndex % 4;

    // First row pattern: cream blue purple pink
    const firstRowPattern: { [key: number]: string } = {
      0: "bg-accentBlue",
      1: "bg-cream",
      2: "bg-accentPurple",
      3: "bg-accentPink",
    };

    // Second row pattern: blue cream pink purple
    const secondRowPattern: { [key: number]: string } = {
      0: "bg-cream",
      1: "bg-accentBlue",
      2: "bg-accentPink",
      3: "bg-accentPurple",
    };

    return isOddRow
      ? secondRowPattern[basePosition]
      : firstRowPattern[basePosition];
  };

  return (
    <div className="w-full h-full fixed top-0 left-0 -z-10 overflow-hidden">
      <div className="w-full min-h-screen grid">
        {/* Mobile Grid (4 columns) */}
        <div className="grid grid-cols-4 lg:hidden">
          {rows.map((_, rowIndex) =>
            Array.from({ length: 4 }).map((_, colIndex) => (
              <div
                key={`mobile-${rowIndex}-${colIndex}`}
                className={`aspect-square ${getColor(rowIndex, colIndex)}`}
              />
            ))
          )}
        </div>

        {/* Desktop Grid (6 columns) */}
        <div className="hidden lg:grid lg:grid-cols-6">
          {rows.map((_, rowIndex) =>
            cols.map((_, colIndex) => (
              <div
                key={`desktop-${rowIndex}-${colIndex}`}
                className={`aspect-square ${getColor(rowIndex, colIndex)}`}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
