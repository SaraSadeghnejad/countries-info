
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { ColumnCell, ColumnDef } from "@/lib/type";
import { useLocation } from "react-router";
import { useCountriesQuery } from "@/api/table-query";

export const useLogic = () => {
  const router = useLocation();

  const [draftData, setDraftData] = useState<ColumnCell>([]);
  const { data } = useCountriesQuery({ enabled: router.pathname === "/" });

  const columnsCell = [
    {
      header: (
        { column: col }: { column: MyColumnDef } // Explicitly typing the function parameter
      ) => (
        <Button
          variant="ghost"
          onClick={() => col.toggleSorting(col.getIsSorted() === "asc")}
        >
          Country Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      accessorKey: "Country Name",
    },

    { header: "Capital", accessorKey: "Capital" },
    { header: "Population", accessorKey: "Population" },
    { header: "Area", accessorKey: "Area" },
    {
      header: "Flag",
      accessorKey: "Flag",
      cell: ({ row }: any) => {
        return <img src={row.getValue("Flag")} width={40} height={30} />;
      },
    },
  ];
  type MyColumnDef = ColumnDef<ColumnCell, string>; // Define your ColumnDef type
interface CountryData {
  name: {
    common: string;
  };
  capital: string[];
  population: number;
  area: number;
  flags: {
    png: string;
  };
}

  useEffect(() => {
    const newArr = data?.map((entry:CountryData, index:number) => {
      return {
        "Country Name": entry.name.common,
        Capital: entry.capital?.[0],
        Population: Number(entry.population).toLocaleString(),
        Area: entry?.area,
        Flag: entry.flags?.png,
        id: index + 10, // Use entry.id if available, otherwise generate by index
      };
    });
    setDraftData(newArr);
  }, [data]);
  return {
    data,
    draftData,
    columnsCell,
  };
};
