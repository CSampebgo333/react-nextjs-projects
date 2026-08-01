/**
 * ============================================================
 * WEATHER API DATA STRUCTURES - DOCUMENTATION
 * ============================================================
 * This file documents the structure of weather data returned
 * by the Open-Meteo API.
 * ============================================================
 */

/**
 * ============================================================
 * 1. LOCATION DATA (from Geocoding API)
 * ============================================================
 * 
 * @typedef {Object} LocationData
 * @property {string} admin1        - First-level administrative division (e.g., state, province)
 * @property {string} admin2        - Second-level administrative division (e.g., county)
 * @property {string} admin3        - Third-level administrative division
 * @property {string} admin4        - Fourth-level administrative division
 * @property {string} country       - Country name
 * @property {string} country_code  - ISO 3166-1 alpha-2 country code (e.g., "US", "GB")
 * @property {number} elevation     - Elevation above sea level (meters)
 * @property {number} feature_code  - Feature classification code
 * @property {number} id            - Unique identifier for the location
 * @property {number} latitude      - Latitude coordinate in decimal degrees
 * @property {number} longitude     - Longitude coordinate in decimal degrees
 * @property {string} name          - City/town/location name
 * @property {string} timezone      - IANA timezone identifier (e.g., "Europe/London")
 * @property {number} population    - Population count
 * @property {string} postcodes     - Postal code(s) for the location
 * 
 * IMPORTANT NOTES:
 * - Required properties: name, latitude, longitude, country
 * - Other properties may vary depending on the location
 * - admin1 is typically the state/province, admin2 is the county
 */

/**
 * Example of Location Data Object:
 * @example
 * {
 *     admin1: "Community of Madrid",
 *     admin2: "Madrid",
 *     country: "Spain",
 *     country_code: "ES",
 *     elevation: 665,
 *     feature_code: "PPLC",
 *     id: 3117735,
 *     latitude: 40.4165,
 *     longitude: -3.70256,
 *     name: "Madrid",
 *     population: 3223334,
 *     timezone: "Europe/Madrid"
 * }
 */

/**
 * ============================================================
 * 2. CURRENT WEATHER OBJECT
 * ============================================================
 * 
 * @typedef {Object} CurrentWeather
 * @property {number} interval      - Time interval in seconds (e.g., 900 = 15 minutes)
 * @property {number} is_day        - 1 = daytime, 0 = nighttime
 * @property {number} temperature   - Temperature in degrees Celsius (°C)
 * @property {string} time          - ISO 8601 timestamp (e.g., "2025-07-17T12:00")
 * @property {number} weathercode   - Encoded weather condition code (see Open-Meteo API docs)
 * @property {number} winddirection - Wind direction in degrees (0° = North, 90° = East)
 * @property {number} windspeed     - Wind speed in kilometers per hour (km/h)
 * 
 * ADDITIONAL PROPERTIES (may be included depending on API request):
 * @property {number} apparent_temperature       - Apparent/feels-like temperature (°C)
 * @property {number} cloud_cover                - Total cloud cover (%)
 * @property {number} dew_point                  - Dew point temperature (°C)
 * @property {number} precipitation              - Precipitation amount (mm)
 * @property {number} rain                       - Rain amount (mm)
 * @property {number} relative_humidity_2m       - Relative humidity at 2 meters (%)
 * @property {number} showers                    - Showers amount (mm)
 * @property {number} snowfall                   - Snowfall amount (cm)
 * @property {number} surface_pressure           - Surface pressure (hPa)
 * @property {number} visibility                 - Visibility (m)
 * @property {number} wind_gusts_10m             - Wind gusts at 10 meters (km/h)
 */

/**
 * Example of Current Weather Object:
 * @example
 * {
 *     interval: 900,
 *     is_day: 1,
 *     temperature: 22.5,
 *     time: "2025-07-17T14:30",
 *     weathercode: 3,
 *     winddirection: 180,   // South wind
 *     windspeed: 15.3
 * }
 */

/**
 * ============================================================
 * 3. DAILY FORECAST OBJECT
 * ============================================================
 * 
 * @typedef {Object} DailyForecast
 * @property {number[]} temperature_2m_max     - Maximum daily temperatures (°C)
 * @property {number[]} temperature_2m_min     - Minimum daily temperatures (°C)
 * @property {string[]} time                   - Array of 7 dates (YYYY-MM-DD)
 * @property {number[]} weather_code           - Weather condition codes for each day
 * 
 * ADDITIONAL PROPERTIES (may be included depending on API request):
 * @property {number[]} apparent_temperature_max - Maximum apparent temperature (°C)
 * @property {number[]} apparent_temperature_min - Minimum apparent temperature (°C)
 * @property {number[]} daylight_duration       - Daylight duration (seconds)
 * @property {number[]} precipitation_hours     - Number of hours with precipitation
 * @property {number[]} precipitation_probability_max - Max precipitation probability (%)
 * @property {number[]} precipitation_sum       - Total precipitation amount (mm)
 * @property {number[]} rain_sum                - Total rain amount (mm)
 * @property {number[]} relative_humidity_2m_max - Maximum relative humidity (%)
 * @property {number[]} relative_humidity_2m_min - Minimum relative humidity (%)
 * @property {number[]} showers_sum             - Total showers amount (mm)
 * @property {number[]} snowfall_sum            - Total snowfall amount (cm)
 * @property {string[]} sunrise                 - Sunrise times (ISO 8601)
 * @property {string[]} sunset                  - Sunset times (ISO 8601)
 * @property {number[]} uv_index_max            - Maximum UV index
 * @property {number[]} wind_gusts_10m_max      - Maximum wind gusts at 10 meters (km/h)
 * @property {number[]} wind_speed_10m_max      - Maximum wind speed at 10 meters (km/h)
 * 
 * IMPORTANT NOTES:
 * - All arrays have the SAME length and are ALIGNED by INDEX
 * - time[0] corresponds to temperature_2m_max[0], temperature_2m_min[0], weather_code[0]
 * - Typically returns 7 days of forecast (today + 6 days)
 */

/**
 * Example of Daily Forecast Object:
 * @example
 * {
 *     temperature_2m_max: [25.0, 27.5, 23.0],
 *     temperature_2m_min: [15.0, 17.5, 14.0],
 *     time: ["2025-07-17", "2025-07-18", "2025-07-19"],
 *     weather_code: [3, 80, 3]
 * }
 * 
 * // Accessing data for day 2 (index 1):
 * // Date: time[1] = "2025-07-18"
 * // Max temp: temperature_2m_max[1] = 27.5°C
 * // Min temp: temperature_2m_min[1] = 17.5°C
 * // Weather: weather_code[1] = 80 (Rain showers)
 */

/**
 * ============================================================
 * 4. HOURLY FORECAST OBJECT
 * ============================================================
 * 
 * @typedef {Object} HourlyForecast
 * @property {number[]} relative_humidity_2m - Relative humidity at 2 meters height (%)
 * @property {number[]} temperature_2m       - Air temperature at 2 meters height (°C)
 * @property {string[]} time                 - Array of timestamps (ISO 8601) for each hour
 * @property {number[]} weather_code         - Weather condition codes for each hour
 * @property {number[]} wind_speed_10m       - Wind speed at 10 meters height (km/h)
 * 
 * ADDITIONAL PROPERTIES (may be included depending on API request):
 * @property {number[]} apparent_temperature       - Apparent/feels-like temperature (°C)
 * @property {number[]} cloud_cover                - Total cloud cover (%)
 * @property {number[]} cloud_cover_low            - Low-level cloud cover (%)
 * @property {number[]} cloud_cover_mid            - Mid-level cloud cover (%)
 * @property {number[]} cloud_cover_high           - High-level cloud cover (%)
 * @property {number[]} dew_point_2m               - Dew point temperature at 2 meters (°C)
 * @property {number[]} evapotranspiration         - Evapotranspiration (mm)
 * @property {number[]} is_day                     - Daytime indicator (1=day, 0=night)
 * @property {number[]} precipitation              - Precipitation amount (mm)
 * @property {number[]} precipitation_probability  - Precipitation probability (%)
 * @property {number[]} rain                       - Rain amount (mm)
 * @property {number[]} relative_humidity_2m       - Relative humidity at 2 meters (%)
 * @property {number[]} showers                    - Showers amount (mm)
 * @property {number[]} snow_depth                 - Snow depth (m)
 * @property {number[]} snowfall                   - Snowfall amount (cm)
 * @property {number[]} soil_temperature_0cm       - Soil temperature at 0 cm (°C)
 * @property {number[]} soil_temperature_6cm       - Soil temperature at 6 cm (°C)
 * @property {number[]} soil_temperature_18cm      - Soil temperature at 18 cm (°C)
 * @property {number[]} soil_temperature_54cm      - Soil temperature at 54 cm (°C)
 * @property {number[]} surface_pressure           - Surface pressure (hPa)
 * @property {number[]} vapor_pressure_deficit     - Vapor pressure deficit (kPa)
 * @property {number[]} visibility                 - Visibility (m)
 * @property {number[]} wind_gusts_10m             - Wind gusts at 10 meters (km/h)
 * 
 * IMPORTANT NOTES:
 * - All arrays have the SAME length and are ALIGNED by INDEX
 * - time[0] corresponds to all other arrays at index 0
 * - Typically returns 24 hours of data (00:00 to 23:00)
 */

/**
 * Example of Hourly Forecast Object:
 * @example
 * {
 *     relative_humidity_2m: [65, 68, 70],
 *     temperature_2m: [18.0, 17.5, 17.0],
 *     time: ["2025-07-17T00:00", "2025-07-17T01:00", "2025-07-17T02:00"],
 *     weather_code: [3, 3, 3],
 *     wind_speed_10m: [10.0, 8.5, 7.0]
 * }
 * 
 * // Accessing data for hour 5 (index 5):
 * // Time: time[5] = "2025-07-17T05:00"
 * // Temperature: temperature_2m[5] = 16.0°C
 * // Humidity: relative_humidity_2m[5] = 72%
 * // Wind speed: wind_speed_10m[5] = 6.5 km/h
 * // Weather: weather_code[5] = 3 (Partly cloudy)
 */

/**
 * ============================================================
 * 5. WEATHER CODE REFERENCE TABLE
 * ============================================================
 * 
 * Common weather codes returned by Open-Meteo API:
 * 
 * | Code | Weather Condition        |
 * |------|--------------------------|
 * | 0    | Clear sky                |
 * | 1    | Mainly clear             |
 * | 2    | Partly cloudy            |
 * | 3    | Overcast                 |
 * | 45   | Fog                      |
 * | 48   | Depositing rime fog      |
 * | 51   | Light drizzle            |
 * | 53   | Moderate drizzle         |
 * | 55   | Dense drizzle            |
 * | 56   | Light freezing drizzle   |
 * | 57   | Dense freezing drizzle   |
 * | 61   | Slight rain              |
 * | 63   | Moderate rain            |
 * | 65   | Heavy rain               |
 * | 66   | Light freezing rain      |
 * | 67   | Heavy freezing rain      |
 * | 71   | Slight snow fall         |
 * | 73   | Moderate snow fall       |
 * | 75   | Heavy snow fall          |
 * | 77   | Snow grains              |
 * | 80   | Rain showers             |
 * | 81   | Moderate rain showers    |
 * | 82   | Heavy rain showers       |
 * | 85   | Slight snow showers      |
 * | 86   | Heavy snow showers       |
 * | 95   | Thunderstorm             |
 * | 96   | Thunderstorm with hail   |
 * | 99   | Thunderstorm with hail   |
 * 
 * @see {@link https://open-meteo.com/en/docs|Open-Meteo Weather Codes Documentation}
 */

/**
 * ============================================================
 * 6. SUMMARY TABLE
 * ============================================================
 * 
 * | Object          | Data Type       | Entries | Purpose              |
 * |-----------------|-----------------|---------|----------------------|
 * | Location Data   | Single object   | 1       | City/Location info   |
 * | Current Weather | Single object   | 1       | Current conditions   |
 * | Daily Forecast  | Arrays of 7     | 7 days  | Daily overview       |
 * | Hourly Forecast | Arrays of 24+   | Hours   | Hourly breakdown     |
 * 
 * ============================================================
 * 7. QUICK REFERENCE - COMMON PROPERTY NAMES
 * ============================================================
 * 
 * | Category      | Core Properties                          |
 * |---------------|------------------------------------------|
 * | Location      | name, country, latitude, longitude      |
 * | Location      | elevation, timezone, population         |
 * | Location      | admin1, admin2, country_code            |
 * | Time-based    | time, sunrise, sunset, daylight_duration |
 * | Temperature   | temperature, temperature_2m, apparent_temperature |
 * | Temperature   | temperature_2m_max, temperature_2m_min   |
 * | Wind          | windspeed, wind_speed_10m, winddirection |
 * | Wind          | wind_gusts_10m                           |
 * | Precipitation | precipitation, rain, showers, snowfall   |
 * | Precipitation | precipitation_probability, precipitation_sum |
 * | Humidity      | relative_humidity_2m, dew_point          |
 * | Pressure      | surface_pressure                         |
 * | Cloud/Weather | cloud_cover, weather_code, is_day        |
 * | Other         | visibility, uv_index_max, snow_depth     |
 * 
 * ============================================================
 * 8. DATA FLOW DIAGRAM
 * ============================================================
 * 
 * User searches city
 *        ↓
 * Geocoding API → Location Data (name, lat, lon, country, etc.)
 *        ↓
 * Weather API with lat/lon
 *        ↓
 * ┌───────────────┼───────────────────┐
 * ↓               ↓                    ↓
 * Current         Daily              Hourly
 * Weather         Forecast           Forecast
 * 
 * ============================================================
 * END OF DOCUMENTATION
 * ============================================================
 */
