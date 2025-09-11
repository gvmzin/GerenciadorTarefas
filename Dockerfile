FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src

RUN apt-get update && \
    apt-get install -y --no-install-recommends nodejs npm
RUN dotnet tool install --global dotnet-ef
COPY ["GerenciadorTarefas.csproj", "./"]
RUN dotnet restore "GerenciadorTarefas.csproj"

COPY . .
RUN dotnet publish "GerenciadorTarefas.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

EXPOSE 80

ENTRYPOINT ["dotnet", "GerenciadorTarefas.dll"]