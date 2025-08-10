export default function HomePage() {
  return (
    <div className="min-h-screen pt-20 pb-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Primul Tău Short
          </h1>
          <p className="text-muted-foreground">
            Învață investițiile pe termen scurt
          </p>
        </div>
        
        <div className="glass-card p-8 rounded-lg">
          {/* Tabs */}
          <div className="mb-8">
            <div className="flex bg-muted rounded-lg p-1">
              <button className="flex-1 py-3 px-4 text-sm font-medium rounded-md bg-background text-foreground shadow-sm">
                Conectare
              </button>
              <button className="flex-1 py-3 px-4 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground">
                Înregistrare
              </button>
            </div>
          </div>

          {/* Google Button */}
          <button className="w-full h-12 mb-6 text-base border border-input bg-background hover:bg-accent rounded-md flex items-center justify-center gap-3">
            <span className="text-blue-500 font-bold text-lg">G</span>
            Continuă cu Google
          </button>

          {/* Separator */}
          <div className="relative flex items-center my-6">
            <div className="flex-1 border-t border-border"></div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">sau cu email și parolă</span>
            </div>
            <div className="flex-1 border-t border-border"></div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
              <input
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-blue-500"
                placeholder="exemplu@email.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Parolă</label>
              <input
                type="password"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-foreground">
                <input type="checkbox" className="rounded" />
                Ține-mă minte
              </label>
              <a href="#" className="text-sm text-blue-400 hover:underline">
                Ai uitat parola?
              </a>
            </div>

            <button
              type="submit"
              className="w-full h-12 text-base bg-blue-600 text-white hover:bg-blue-700 rounded-md font-medium transition-colors"
            >
              Conectează-te
            </button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Investițiile implică riscuri. Conținutul platformei are scop educativ și nu constituie sfaturi de investiții.
          </p>
        </div>
      </div>
    </div>
  );
}
