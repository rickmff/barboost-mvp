export function AdminCategoryDistribution() {
  const categories = [
    { name: "Cervejas", percentage: 42 },
    { name: "Vinhos", percentage: 28 },
    { name: "Destilados", percentage: 18 },
    { name: "Não alcoólicos", percentage: 12 },
  ]

  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <div key={category.name} className="flex items-center">
          <div className="w-full">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm">{category.name}</span>
              <span className="text-sm font-medium">{category.percentage}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: `${category.percentage}%` }}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

