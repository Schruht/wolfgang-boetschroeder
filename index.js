import { argv } from 'process' 

const rawList = `
== Liste ==
Nicht aufgeführt sind die Bundesminister, die mit der vorübergehenden Wahrnehmung der Geschäfte eines erkrankten oder entlassenen Bundesministers beauftragt waren ([[M. d. W. d. G. b.]]).

{{TOC}}
=== A ===
* [[Konrad Adenauer]] (1876–1967), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1949–1963 [[Bundeskanzler (Deutschland)|Bundeskanzler]]
** 1951–1955 [[Auswärtiges Amt|Auswärtiges]]
* [[Ilse Aigner]] (* 1964), [[Christlich-Soziale Union in Bayern|CSU]]
** 2008–2013 [[Bundesministerium für Ernährung, Landwirtschaft und Verbraucherschutz|Ernährung, Landwirtschaft und Verbraucherschutz]]
* [[Peter Altmaier]] (* 1958), [[Christlich Demokratische Union Deutschlands|CDU]]
** 2012–2013 [[Bundesministerium für Umwelt, Naturschutz und Reaktorsicherheit|Umwelt, Naturschutz und Reaktorsicherheit]]
** 2013–2018 Besondere Aufgaben
** 2018–2021 [[Bundesministerium für Wirtschaft und Energie|Wirtschaft und Energie]]
* [[Hans Apel]] (1932–2011), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1974–1978 [[Bundesministerium der Finanzen|Finanzen]]
** 1978–1982 [[Bundesministerium der Verteidigung|Verteidigung]]
* [[Walter Arendt]] (1925–2005), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1969–1976 [[Bundesministerium für Arbeit und Soziales|Arbeit und Sozialordnung]]

=== B ===
* [[Annalena Baerbock]] (* 1980), [[Bündnis 90/Die Grünen]]
** seit 2021 Auswärtiges
* [[Daniel Bahr]] (* 1976), [[Freie Demokratische Partei|FDP]]
** 2011–2013 Gesundheit
* [[Egon Bahr]] (1922–2015), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1972–1974 Besondere Aufgaben
** 1974–1976 Wirtschaftliche Zusammenarbeit
* [[Siegfried Balke]] (1902–1984), [[Christlich-Soziale Union in Bayern|CSU]]
** 1953–1956 Post- und Fernmeldewesen
** 1956–1957 Atomfragen
** 1957–1961 Atomkernenergie und Wasserwirtschaft
** 1961–1962 Atomkernenergie
* [[Martin Bangemann]] (1934–2022), [[Freie Demokratische Partei|FDP]]
** 1984–1988 Wirtschaft
* [[Katarina Barley]] (* 1968), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2017–2018 Familie, Senioren, Frauen und Jugend
** 2018–2019 Justiz und Verbraucherschutz
* [[Rainer Barzel]] (1924–2006), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1962–1963 Gesamtdeutsche Fragen
** 1982–1983 Innerdeutsche Beziehungen
* [[Gerhart Baum]] (* 1932), [[Freie Demokratische Partei|FDP]]
** 1978–1982 Inneres
* [[Ernst Benda]] (1925–2009), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1968–1969 Inneres
* [[Christine Bergmann]] (* 1939), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1998–2002 Familie, Senioren, Frauen und Jugend
* [[Sabine Bergmann-Pohl]] (* 1946), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1990–1991 Besondere Aufgaben
* [[Theodor Blank]] (1905–1972), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1955–1956 Verteidigung
** 1957–1965 Arbeit und Sozialordnung
* [[Franz Blücher]] (1896–1959), [[Freie Demokratische Partei|FDP]], ab 1956 [[Freie Volkspartei|FVP]]
** 1949–1957 Stellvertreter des Bundeskanzlers
** 1949–1953 Angelegenheiten des Marshallplans
** 1953–1957 Wirtschaftliche Zusammenarbeit
* [[Norbert Blüm]] (1935–2020), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1982–1998 Arbeit und Sozialordnung
* [[Kurt Bodewig]] (* 1955), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2000–2002 Verkehr, Bau und Wohnungswesen
* [[Friedrich Bohl]] (* 1945), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1991–1998 Besondere Aufgaben
* [[Jochen Borchert]] (* 1940), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1993–1998 Ernährung, Landwirtschaft und Forsten
* [[Wolfgang Bötsch]] (1938–2017), [[Christlich-Soziale Union in Bayern|CSU]]
** 1993–1997 Post und Telekommunikation
* [[Willy Brandt]] (1913–1992), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1966–1969 Stellvertreter des Bundeskanzlers
** 1966–1969 Auswärtiges
** 1969–1974 [[Bundeskanzler (Deutschland)|Bundeskanzler]]
* [[Aenne Brauksiepe]] (1912–1997), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1968–1969 Familie und Jugend
* [[Helge Braun]] (* 1972), [[Christlich Demokratische Union Deutschlands|CDU]]
** 2018–2021 Besondere Aufgaben
* [[Heinrich von Brentano]] (1904–1964), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1955–1961 Auswärtiges
* [[Rainer Brüderle]] (* 1945), [[Freie Demokratische Partei|FDP]]
** 2009–2011 Wirtschaft und Technologie
* [[Ewald Bucher]] (1914–1991), [[Freie Demokratische Partei|FDP]]
** 1962–1965 Justiz
** 1965–1966 Wohnungswesen und Städtebau
* [[Andreas von Bülow]] (* 1937), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1980–1982 Forschung und Technologie
* [[Edelgard Bulmahn]] (* 1951), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1998–2005 Bildung und Forschung
* [[Marco Buschmann]] (* 1977), [[Freie Demokratische Partei|FDP]]
** seit 2021 Justiz

=== C ===
* [[Wolfgang Clement]] (1940–2020), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2002–2005 Wirtschaft und Arbeit

=== D ===
* [[Herta Däubler-Gmelin]] (* 1943), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1998–2002 Justiz
* [[Rolf Dahlgrün]] (1908–1969), [[Freie Demokratische Partei|FDP]]
** 1962–1966 Finanzen
* [[Thomas Dehler]] (1897–1967), [[Freie Demokratische Partei|FDP]]
** 1949–1953 Justiz
* [[Alexander Dobrindt]] (* 1970), [[Christlich-Soziale Union in Bayern|CSU]]
** 2013–2017 Verkehr und digitale Infrastruktur
* [[Klaus von Dohnanyi]] (* 1928), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1972–1974 Bildung und Wissenschaft
* [[Werner Dollinger]] (1918–2008), [[Christlich-Soziale Union in Bayern|CSU]]
** 1962–1966 [[Bundesschatzministerium|Bundesschatz]]
** 1966 Wirtschaftliche Zusammenarbeit
** 1966–1969 Post- und Fernmeldewesen
** 1982–1987 Verkehr

=== E ===
* [[Horst Ehmke]] (1927–2017), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1969 Justiz
** 1969–1972 Besondere Aufgaben
** 1972–1974 Forschung und Technologie und Post- und Fernmeldewesen
* [[Herbert Ehrenberg]] (1926–2018), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1976–1982 Arbeit und Sozialordnung
* [[Hans Eichel]] (* 1941), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1999–2005 Finanzen
* [[Hans A. Engelhard]] (1934–2008), [[Freie Demokratische Partei|FDP]]
** 1982–1991 Justiz
* [[Björn Engholm]] (* 1939), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1981–1982 Bildung und Wissenschaft
** 1982 Ernährung, Landwirtschaft und Forsten
* [[Erhard Eppler]] (1926–2019), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1968–1974 Wirtschaftliche Zusammenarbeit
* [[Ludwig Erhard]] (1897–1977), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1949–1963 Wirtschaft
** 1957–1963 Stellvertreter des Bundeskanzlers
** 1963–1966 [[Bundeskanzler (Deutschland)|Bundeskanzler]]
* [[Josef Ertl]] (1925–2000), [[Freie Demokratische Partei|FDP]]
** 1969–1982, 1982–1983 Ernährung, Landwirtschaft und Forsten
* [[Franz Etzel]] (1902–1970), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1957–1961 Finanzen

=== F ===
* [[Nancy Faeser]] (* 1970), [[Sozialdemokratische Partei Deutschlands|SPD]]
** seit 2021 Inneres und Heimat
* [[Andrea Fischer (Politikerin, 1960)|Andrea Fischer]] (* 1960), [[Bündnis 90/Die Grünen]]
** 1998–2001 Gesundheit
* [[Joschka Fischer]] (* 1948), [[Bündnis 90/Die Grünen]]
** 1998–2005 Stellvertreter des Bundeskanzlers
** 1998–2005 Auswärtiges
* [[Katharina Focke]] (1922–2016), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1972–1976 Jugend, Familie und Gesundheit
* [[Egon Franke]] (1913–1995), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1969–1982 Innerdeutsche Beziehungen
** 1982 Stellvertreter des Bundeskanzlers
* [[Hans Friderichs]] (* 1931), [[Freie Demokratische Partei|FDP]]
** 1972–1977 Wirtschaft
* [[Hans-Peter Friedrich]] (* 1957), [[Christlich-Soziale Union in Bayern|CSU]]
** 2011–2013 Inneres
** 2013–2014 Ernährung und Landwirtschaft
* [[Anke Fuchs]] (1937–2019), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1982 Jugend, Familie und Gesundheit
* [[Karl-Heinz Funke]] (* 1946), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1998–2001 Ernährung, Landwirtschaft und Forsten

=== G ===
* [[Sigmar Gabriel]] (* 1959), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2005–2009 Umwelt, Naturschutz und Reaktorsicherheit
** 2013–2017 Wirtschaft und Energie
** 2013–2018 Stellvertreter der Bundeskanzlerin
** 2017–2018 Auswärtiges
* [[Heiner Geißler]] (1930–2017), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1982–1985 Jugend, Familie und Gesundheit
* [[Hans-Dietrich Genscher]] (1927–2016), [[Freie Demokratische Partei|FDP]]
** 1969–1974 Inneres
** 1974–1982, 1982–1992 Stellvertreter des Bundeskanzlers
** 1974–1982, 1982–1992 Auswärtiges
* [[Klara Geywitz]] (* 1976), [[Sozialdemokratische Partei Deutschlands|SPD]]
** seit 2021 Wohnen, Stadtentwicklung und Bauwesen
* [[Franziska Giffey]] (* 1978), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2018–2021 Familie, Senioren, Frauen und Jugend
* [[Michael Glos]] (* 1944), [[Christlich-Soziale Union in Bayern|CSU]]
** 2005–2009 Wirtschaft und Technologie
* [[Johann Baptist Gradl]] (1904–1988), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1965–1966 Vertriebene, Flüchtlinge und Kriegsgeschädigte
** 1966 Gesamtdeutsche Fragen
* [[Hermann Gröhe]] (* 1961), [[Christlich Demokratische Union Deutschlands|CDU]]
** 2013–2018 Gesundheit
* [[Kurt Gscheidle]] (1924–2003), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1974–1980 Verkehr und Post- und Fernmeldewesen
** 1980–1982 Post- und Fernmeldewesen
* [[Karl-Theodor zu Guttenberg|Karl Theodor von und zu Guttenberg]] (* 1971), [[Christlich-Soziale Union in Bayern|CSU]]
** 2009 Wirtschaft und Technologie
** 2009–2011 Verteidigung

=== H ===
* [[Dieter Haack]] (* 1934), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1978–1982 Bau- und Wohnungswesen
* [[Robert Habeck]] (* 1969), [[Bündnis 90/Die Grünen]]
** seit 2021 Stellvertreter des Bundeskanzlers
** seit 2021 Wirtschaft und Klimaschutz
* [[Kai-Uwe von Hassel]] (1913–1997), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1963–1966 Verteidigung
** 1966–1969 Vertriebene, Flüchtlinge und Kriegsgeschädigte
* [[Gerda Hasselfeldt]] (* 1950), [[Christlich-Soziale Union in Bayern|CSU]]
** 1989–1991 Raumordnung, Bauwesen und Städtebau
** 1991–1992 Gesundheit
* [[Volker Hauff]] (* 1940), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1978–1980 Forschung und Technologie
** 1980–1982 Verkehr
* [[Helmut Haussmann]] (* 1943), [[Freie Demokratische Partei|FDP]]
** 1988–1991 Wirtschaft
* [[Bruno Heck]] (1917–1989), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1962–1963 Familien- und Jugendfragen
** 1963–1968 Familie und Jugend
** 1966 Wohnungswesen und Städtebau
* [[Hubertus Heil]] (* 1972), [[Sozialdemokratische Partei Deutschlands|SPD]]
** seit 2018 Arbeit und Soziales
* [[Gustav Heinemann]] (1899–1976), [[Christlich Demokratische Union Deutschlands|CDU]], ab 1956: [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1949–1950 Inneres
** 1966–1969 Justiz
* [[Heinrich Hellwege]] (1908–1991), [[Deutsche Partei|DP]]
** 1949–1955 Angelegenheiten des Bundesrates
* [[Barbara Hendricks (Politikerin)|Barbara Hendricks]] (* 1952), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2013–2018 Umwelt, Naturschutz, Bau und Reaktorsicherheit
* [[Hermann Höcherl]] (1912–1989), [[Christlich-Soziale Union in Bayern|CSU]]
** 1961–1965 Inneres
** 1965–1969 Ernährung, Landwirtschaft und Forsten
* [[Bodo Hombach]] (* 1952), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1998–1999 Besondere Aufgaben
* [[Antje Huber]] (1924–2015), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1976–1982 Jugend, Familie und Gesundheit

=== J ===
* [[Richard Jaeger]] (1913–1998), [[Christlich-Soziale Union in Bayern|CSU]]
** 1965–1966 Justiz
* [[Gerhard Jahn]] (1927–1998), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1969–1974 Justiz
* [[Franz Josef Jung]] (* 1949), [[Christlich Demokratische Union Deutschlands|CDU]]
** 2005–2009 Verteidigung
** 2009 Arbeit und Soziales

=== K ===
* [[Jakob Kaiser]] (1888–1961), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1949–1957 Gesamtdeutsche Fragen
* [[Manfred Kanther]] (* 1939), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1993–1998 Inneres
* [[Anja Karliczek]] (* 1971), [[Christlich Demokratische Union Deutschlands|CDU]]
** 2018–2021 Bildung und Forschung
* [[Hans Katzer]] (1919–1996), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1965–1969 Arbeit und Sozialordnung
* [[Ignaz Kiechle]] (1930–2003), [[Christlich-Soziale Union in Bayern|CSU]]
** 1983–1993 Ernährung, Landwirtschaft und Forsten
* [[Kurt Georg Kiesinger]] (1904–1988), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1966–1969 [[Bundeskanzler (Deutschland)|Bundeskanzler]]
* [[Klaus Kinkel]] (1936–2019), zunächst [[Parteiloser|parteilos]], ab 1991: [[Freie Demokratische Partei|FDP]]
** 1991–1992 Justiz
** 1992–1998 Auswärtiges
** 1993–1998 Stellvertreter des Bundeskanzlers
* [[Hans Klein (Politiker, 1931)|Hans Klein]] (1931–1996), [[Christlich-Soziale Union in Bayern|CSU]]
** 1987–1989 Wirtschaftliche Zusammenarbeit
** 1989–1990 Besondere Aufgaben
* [[Reinhard Klimmt]] (* 1942), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1999–2000 Verkehr, Bau- und Wohnungswesen
* [[Helmut Kohl]] (1930–2017), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1982–1998 [[Bundeskanzler (Deutschland)|Bundeskanzler]]
* Kristina Köhler (* 1977), [[Christlich Demokratische Union Deutschlands|CDU]] (ab 12. Februar 2010 [[Kristina Schröder]])
** 2009–2013 Familie, Senioren, Frauen und Jugend
* [[Julia Klöckner]] (* 1972), [[Christlich Demokratische Union Deutschlands|CDU]]
** 2018–2021 Ernährung und Landwirtschaft
* [[Waldemar Kraft]] (1898–1977), [[Gesamtdeutscher Block/Bund der Heimatvertriebenen und Entrechteten|GB/BHE]], ab 1955: [[Christlich Demokratische Union Deutschlands|CDU]]
** 1953–1956 Besondere Aufgaben
* [[Annegret Kramp-Karrenbauer]] (* 1962), [[Christlich Demokratische Union Deutschlands|CDU]]
** 2019–2021 Verteidigung
* [[Günther Krause]] (* 1953), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1990–1991 Besondere Aufgaben
** 1991–1993 Verkehr
* [[Heinrich Krone]] (1895–1989), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1961–1964 Besondere Aufgaben
** 1964–1965 „Der Vorsitzende des Bundesverteidigungsrates“
** 1965–1966 Angelegenheiten des Bundesverteidigungsrates
* [[Hans Krüger (Politiker, 1902)|Hans Krüger]] (1902–1971), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1963–1964 Vertriebene, Flüchtlinge und Kriegsgeschädigte
* [[Paul Krüger (Politiker, 1950)|Paul Krüger]] (* 1950), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1993–1994 Forschung und Technologie
* [[Renate Künast]] (* 1955), [[Bündnis 90/Die Grünen]]
** 2001–2005 Verbraucherschutz, Ernährung und Landwirtschaft

=== L ===
* [[Karl-Hans Laermann]] (* 1929), [[Freie Demokratische Partei|FDP]]
** 1994 Bildung und Wissenschaft
* [[Oskar Lafontaine]] (* 1943), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1998–1999 Finanzen
* [[Manfred Lahnstein]] (* 1937), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1982 Finanzen
** 1982 Wirtschaft
* [[Christine Lambrecht]] (* 1965), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2019–2021 Justiz und Verbraucherschutz
** 2021 Familie, Senioren, Frauen und Jugend
** 2021–2023 Verteidigung
* [[Otto Graf Lambsdorff]] (1926–2009), [[Freie Demokratische Partei|FDP]]
** 1977–1982, 1982–1984 Wirtschaft
* [[Lauritz Lauritzen]] (1910–1980), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1966–1969 Wohnungswesen und Städtebau
** 1969–1972 Städtebau und Wohnungswesen
** 1972 Verkehr und Post- und Fernmeldewesen
** 1972–1974 Verkehr
* [[Karl Lauterbach]] (* 1963), [[Sozialdemokratische Partei Deutschlands|SPD]]
** seit 2021 Gesundheit
* [[Georg Leber]] (1920–2012), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1966–1969 Verkehr
** 1969–1972 Verkehr und Post- und Fernmeldewesen
** 1972–1978 Verteidigung
* [[Robert Lehr]] (1883–1956), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1950–1953 Inneres
* [[Ursula Lehr]] (1930–2022), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1988–1991 Jugend, Familie, Frauen und Gesundheit
* [[Steffi Lemke]] (* 1968)
** seit 2021 Umwelt, Naturschutz, nukleare Sicherheit und Verbraucherschutz
* [[Ernst Lemmer]] (1898–1970), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1956–1957 Post- und Fernmeldewesen
** 1957–1962 Gesamtdeutsche Fragen
** 1964–1965 Vertriebene, Flüchtlinge und Kriegsgeschädigte
* [[Hans Lenz (Politiker, 1907)|Hans Lenz]] (1907–1968), [[Freie Demokratische Partei|FDP]]
** 1961–1962 Bundesschatz
** 1962–1965 Wissenschaftliche Forschung
* [[Hans Leussink]] (1912–2008), parteilos
** 1969–1972 Bildung und Wissenschaft
* [[Sabine Leutheusser-Schnarrenberger]] (* 1951), [[Freie Demokratische Partei|FDP]]
** 1992–1996 Justiz
** 2009–2013 Justiz
* [[Ursula von der Leyen]] (* 1958), [[Christlich Demokratische Union Deutschlands|CDU]]
** 2005–2009 Familie, Senioren, Frauen und Jugend
** 2009–2013 Arbeit und Soziales
** 2013–2019 Verteidigung
* [[Christian Lindner]] (* 1979), [[Freie Demokratische Partei|FDP]]
** seit 2021 Finanzen
* [[Hermann Lindrath]] (1896–1960), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1957–1960 Wirtschaftlicher Besitz des Bundes
* [[Heinrich Lübke]] (1894–1972), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1953–1959 Ernährung, Landwirtschaft und Forsten
* [[Paul Lücke]] (1914–1976), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1957–1961 Wohnungsbau
** 1961–1965 Wohnungswesen, Städtebau und Raumordnung
** 1965–1968 Inneres
* [[Hans Lukaschek]] (1885–1960), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1949–1950 Angelegenheiten der Vertriebenen
** 1950–1953 Vertriebene

=== M ===
* [[Heiko Maas]] (* 1966), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2013–2018 Justiz und Verbraucherschutz
** 2018–2021 Auswärtiges
* [[Werner Maihofer]] (1918–2009), [[Freie Demokratische Partei|FDP]]
** 1972–1974 Besondere Aufgaben
** 1974–1978 Inneres
* [[Lothar de Maizière]] (* 1940), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1990 Besondere Aufgaben
* [[Thomas de Maizière]] (* 1954), [[Christlich Demokratische Union Deutschlands|CDU]]
** 2005–2009 Besondere Aufgaben
** 2009–2011 Inneres
** 2011–2013 Verteidigung
** 2013–2018 Inneres
* [[Hans Matthöfer]] (1925–2009), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1974–1978 Forschung und Technologie
** 1978–1982 Finanzen
** 1982 Post- und Fernmeldewesen
* [[Erich Mende]] (1916–1998), [[Freie Demokratische Partei|FDP]]
** 1963–1966 Stellvertreter des Bundeskanzlers
** 1963–1966 Gesamtdeutsche Fragen
* [[Hans-Joachim von Merkatz]] (1905–1982), [[Deutsche Partei|DP]]
** 1955–1962 Angelegenheiten des Bundesrates
** 1956–1957 Justiz
** 1960–1961 Vertriebene, Flüchtlinge und Kriegsgeschädigte
* [[Angela Merkel]] (* 1954), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1991–1994 Frauen und Jugend
** 1994–1998 Umwelt, Naturschutz und Reaktorsicherheit
** 2005–2021 [[Bundeskanzler (Deutschland)|Bundeskanzlerin]]
* [[Wolfgang Mischnick]] (1921–2002), [[Freie Demokratische Partei|FDP]]
** 1961–1963 Vertriebene, Flüchtlinge und Kriegsgeschädigte
* [[Jürgen Möllemann]] (1945–2003), [[Freie Demokratische Partei|FDP]]
** 1987–1991 Bildung und Wissenschaft
** 1991–1993 Wirtschaft
** 1992–1993 Stellvertreter des Bundeskanzlers
* [[Alex Möller]] (1903–1985), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1969–1971 Finanzen
* [[Gerd Müller (Politiker, 1955)|Gerd Müller]] (* 1955), [[Christlich-Soziale Union in Bayern|CSU]]
** 2013–2021 Wirtschaftliche Zusammenarbeit und Entwicklung
* [[Werner Müller (Politiker, 1946)|Werner Müller]] (1946–2019), parteilos
** 1998–2002 Wirtschaft
* [[Franz Müntefering]] (* 1940), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1998–1999 Verkehr, Bau- und Wohnungswesen
** 2005–2007 Stellvertreter der Bundeskanzlerin
** 2005–2007 Arbeit und Soziales

=== N ===
* [[Andrea Nahles]] (* 1970), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2013–2017 Arbeit und Soziales
* [[Fritz Neumayer]] (1884–1973), [[Freie Demokratische Partei|FDP]], ab 1956: [[Freie Volkspartei|FVP]]
** 1952–1953 Wohnungsbau
** 1953–1956 Justiz
* [[Dirk Niebel]] (* 1963), [[Freie Demokratische Partei|FDP]]
** 2009–2013 Wirtschaftliche Zusammenarbeit und Entwicklung
* [[Alois Niederalt]] (1911–2004), [[Christlich-Soziale Union in Bayern|CSU]]
** 1962–1966 Angelegenheiten des Bundesrates und der Länder
* [[Wilhelm Niklas]] (1887–1957), [[Christlich-Soziale Union in Bayern|CSU]]
** 1949–1953 Ernährung, Landwirtschaft und Forsten
* [[Claudia Nolte]] (* 1966), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1994–1998 Familie, Senioren, Frauen und Jugend

=== O ===
* [[Theodor Oberländer]] (1905–1998), [[Gesamtdeutscher Block/Bund der Heimatvertriebenen und Entrechteten|GB/BHE]], ab 1955: [[Christlich Demokratische Union Deutschlands|CDU]]
** 1953–1954 Vertriebene
** 1954–1960 Vertriebene, Flüchtlinge und Kriegsgeschädigte
* [[Rainer Offergeld]] (* 1937), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1978–1982 Wirtschaftliche Zusammenarbeit
* [[Rainer Ortleb]] (* 1944), [[Freie Demokratische Partei|FDP]]
** 1990–1991 Besondere Aufgaben
** 1991–1994 Bildung und Wissenschaft
* [[Eduard Oswald]] (* 1947), [[Christlich-Soziale Union in Bayern|CSU]]
** 1998 Raumordnung, Bauwesen und Städtebau
* [[Cem Özdemir]] (* 1965), [[Bündnis 90/Die Grünen]]
** seit 2021 Ernährung und Landwirtschaft

=== P ===
* [[Lisa Paus]] (* 1968), [[Bündnis 90/Die Grünen]]
** seit 2022 Familie, Senioren, Frauen und Jugend
* [[Boris Pistorius]] (* 1960), [[Sozialdemokratische Partei Deutschlands|SPD]]
** seit 2023 Verteidigung
* [[Ronald Pofalla]] (* 1959), [[Christlich Demokratische Union Deutschlands|CDU]]
** 2009–2013 Besondere Aufgaben
* [[Victor-Emanuel Preusker]] (1913–1991), [[Freie Demokratische Partei|FDP]], ab 1956: [[Freie Volkspartei|FVP]]
** 1953–1957 Wohnungsbau

=== R ===
* [[Peter Ramsauer]] (* 1954), [[Christlich-Soziale Union in Bayern|CSU]]
** 2009–2013 Verkehr, Bau und Stadtentwicklung
* [[Karl Ravens]] (1927–2017), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1974–1978 Raumordnung, Bauwesen und Städtebau
* [[Günter Rexrodt]] (1941–2004), [[Freie Demokratische Partei|FDP]]
** 1993–1998 Wirtschaft
* [[Heinz Riesenhuber]] (* 1935), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1982–1993 Forschung und Technologie
* [[Walter Riester]] (* 1943), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1998–2002 Arbeit und Sozialordnung
* [[Hannelore Rönsch]] (* 1942), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1991–1994 Familie und Senioren
* [[Philipp Rösler]] (* 1973), [[Freie Demokratische Partei|FDP]]
** 2009–2011 Gesundheit
** 2011–2013 Wirtschaft und Technologie
** 2011–2013 Stellvertreter der Bundeskanzlerin
* [[Norbert Röttgen]] (* 1965), [[Christlich Demokratische Union Deutschlands|CDU]]
** 2009–2012 Umwelt, Naturschutz und Reaktorsicherheit
* [[Helmut Rohde]] (1925–2016), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1974–1978 Bildung und Wissenschaft
* [[Volker Rühe]] (* 1942), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1992–1998 Verteidigung
* [[Jürgen Rüttgers]] (* 1951), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1994–1998 Bildung, Wissenschaft, Forschung und Technologie

=== S ===
* [[Hermann Schäfer (Politiker, 1892)|Hermann Schäfer]] (1892–1966), [[Freie Demokratische Partei|FDP]], ab 1956: [[Freie Volkspartei|FVP]]
** 1953–1956 Besondere Aufgaben
* [[Fritz Schäffer]] (1888–1967), [[Christlich-Soziale Union in Bayern|CSU]]
** 1949–1957 Finanzen
** 1957–1961 Justiz
* [[Wolfgang Schäuble]] (* 1942), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1984–1989 Besondere Aufgaben
** 1989–1991 Inneres
** 2005–2009 Inneres
** 2009–2017 Finanzen
* [[Rudolf Scharping]] (* 1947), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1998–2002 Verteidigung
* [[Annette Schavan]] (* 1955), [[Christlich Demokratische Union Deutschlands|CDU]]
** 2005–2013 Bildung und Forschung
* [[Walter Scheel]] (1919–2016), [[Freie Demokratische Partei|FDP]]
** 1961–1966 Wirtschaftliche Zusammenarbeit
** 1969–1974 Stellvertreter des Bundeskanzlers
** 1969–1974 Auswärtiges
* [[Andreas Scheuer]] (* 1974), [[Christlich-Soziale Union in Bayern|CSU]]
** 2018–2021 Verkehr und digitale Infrastruktur
* [[Karl Schiller]] (1911–1994), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1966–1971 Wirtschaft
** 1971–1972 Wirtschaft und Finanzen
* [[Otto Schily]] (* 1932), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1998–2005 Inneres
* [[Marie Schlei]] (1919–1983), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1976–1978 Wirtschaftliche Zusammenarbeit
* [[Carlo Schmid]] (1896–1979), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1966–1969 Angelegenheiten des Bundesrates und der Länder
* [[Christian Schmidt]] (* 1957), [[Christlich-Soziale Union in Bayern|CSU]]
** 2014–2018 Ernährung und Landwirtschaft
* [[Helmut Schmidt]] (1918–2015), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1969–1972 Verteidigung
** 1972 Wirtschaft und Finanzen
** 1972–1974 Finanzen
** 1974–1982 [[Bundeskanzler (Deutschland)|Bundeskanzler]]
** 1982 Auswärtiges
* [[Renate Schmidt]] (* 1943), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2002–2005 Familie, Senioren, Frauen und Jugend
* [[Ulla Schmidt (Politikerin, 1949)|Ulla Schmidt]] (* 1949), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2001–2002, 2005–2009 Gesundheit
** 2002–2005 Gesundheit und Soziale Sicherung
* [[Wolfgang Schmidt (Politiker, 1970)|Wolfgang Schmidt]] (* 1970), [[Sozialdemokratische Partei Deutschlands|SPD]]
** seit 2021 Besondere Aufgaben 
* [[Edzard Schmidt-Jortzig]] (* 1941), [[Freie Demokratische Partei|FDP]]
** 1996–1998 Justiz
* [[Jürgen Schmude]] (* 1936), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1978–1981 Bildung und Wissenschaft
** 1981–1982 Justiz
** 1982 Inneres
* [[Kurt Schmücker]] (1919–1996), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1963–1966 Wirtschaft
** 1966 Finanzen
** 1966–1969 Bundesschatz
* [[Oscar Schneider]] (* 1927), [[Christlich-Soziale Union in Bayern|CSU]]
** 1982–1989 Raumordnung, Bauwesen und Städtebau
* [[Olaf Scholz]] (* 1958), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2007–2009 Arbeit und Soziales
** 2018–2021 Stellvertreter der Bundeskanzlerin
** 2018–2021 Finanzen
** seit 2021 Bundeskanzler
* [[Rupert Scholz]] (* 1937), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1988–1989 Verteidigung
* [[Gerhard Schröder (Politiker, 1910)|Gerhard Schröder]] (1910–1989), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1953–1961 Inneres
** 1961–1966 Auswärtiges
** 1966–1969 Verteidigung
* [[Gerhard Schröder]] (* 1944), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1998–2005 Bundeskanzler
* [[Kristina Schröder]] (* 1977), [[Christlich Demokratische Union Deutschlands|CDU]] (bis 12. Februar 2010 Kristina Köhler)
** 2009–2013 Familie, Senioren, Frauen und Jugend
* [[Hans Schuberth]] (1897–1976), [[Christlich-Soziale Union in Bayern|CSU]]
** 1949–1950 Angelegenheiten des Fernmeldewesens
** 1949–1953 Post- und Fernmeldewesen
* [[Svenja Schulze]] (* 1968), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2018–2021 Umwelt, Naturschutz und nukleare Sicherheit
** seit 2021 Wirtschaftliche Zusammenarbeit und Entwicklung
* [[Irmgard Schwaetzer]] (* 1942), [[Freie Demokratische Partei|FDP]]
** 1991–1994 [[Bundesministerium für Verkehr, Bau- und Wohnungswesen|Raumordnung, Bauwesen und Städtebau]]
* [[Werner Schwarz (Politiker, 1900)|Werner Schwarz]] (1900–1982), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1959–1965 Ernährung, Landwirtschaft und Forsten
* [[Elisabeth Schwarzhaupt]] (1901–1986), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1961–1966 Gesundheit
* [[Christian Schwarz-Schilling]] (* 1930), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1982–1989 Post- und Fernmeldewesen
** 1989–1992 Post und Telekommunikation
* [[Manuela Schwesig]] (* 1974), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2013–2017 Familie, Senioren, Frauen und Jugend
* [[Hans-Christoph Seebohm]] (1903–1967), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1949–1966 Verkehr
** 1966 Stellvertreter des Bundeskanzlers
* [[Horst Seehofer]] (* 1949), [[Christlich-Soziale Union in Bayern|CSU]]
** 1992–1998 Gesundheit
** 2005–2008 Ernährung, Landwirtschaft und Verbraucherschutz
** 2018–2021 Inneres, Bau und Heimat
* [[Rudolf Seiters]] (* 1937), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1989–1991 Besondere Aufgaben
** 1991–1993 Inneres
* [[Jens Spahn]] (* 1980), [[Christlich Demokratische Union Deutschlands|CDU]]
** 2018–2021 Gesundheit
* [[Anne Spiegel]] (* 1980), [[Bündnis 90/Die Grünen]]
** 2021–2022 Familie, Senioren, Frauen und Jugend
* [[Carl-Dieter Spranger]] (* 1939), [[Christlich-Soziale Union in Bayern|CSU]]
** 1991–1993 Wirtschaftliche Zusammenarbeit
** 1993–1998 Wirtschaftliche Zusammenarbeit und Entwicklung
* [[Wolfgang Stammberger]] (1920–1982), [[Freie Demokratische Partei|FDP]]
** 1961–1962 Justiz
* [[Heinz Starke]] (1911–2001), [[Freie Demokratische Partei|FDP]]
** 1961–1962 Finanzen
* [[Bettina Stark-Watzinger]], [[Freie Demokratische Partei|FDP]]
** seit 2021 Bildung und Forschung
* [[Peer Steinbrück]] (* 1947), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2005–2009 Finanzen
* [[Frank-Walter Steinmeier]] (* 1956), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2005–2009 Auswärtiges
** 2007–2009 Stellvertreter der Bundeskanzlerin
** 2013–2017 Auswärtiges
* [[Manfred Stolpe]] (1936–2019), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2002–2005 Verkehr, Bau- und Wohnungswesen
* [[Gerhard Stoltenberg]] (1928–2001), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1965–1969 Wissenschaftliche Forschung
** 1982–1989 Finanzen
** 1989–1992 Verteidigung
* [[Anton Storch (Politiker)|Anton Storch]] (1892–1975), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1949–1957 Arbeit
* [[Franz Josef Strauß]] (1915–1988), [[Christlich-Soziale Union in Bayern|CSU]]
** 1953–1955 Besondere Aufgaben
** 1955–1956 Atomfragen
** 1956–1963 Verteidigung
** 1966–1969 Finanzen
* [[Käte Strobel]] (1907–1996), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1966–1969 Gesundheit
** 1969–1972 Jugend, Familie und Gesundheit
* [[Peter Struck]] (1943–2012), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2002–2005 Verteidigung
* [[Richard Stücklen]] (1916–2002), [[Christlich-Soziale Union in Bayern|CSU]]
** 1957–1966 Post- und Fernmeldewesen
* [[Rita Süssmuth]] (* 1937), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1985–1986 Jugend, Familie und Gesundheit
** 1986–1988 Jugend, Familie, Frauen und Gesundheit

=== T ===
* [[Wolfgang Tiefensee]] (* 1955), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2005–2009 Verkehr, Bau und Stadtentwicklung
* [[Robert Tillmanns]] (1896–1955), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1953–1955 Besondere Aufgaben
* [[Klaus Töpfer]] (* 1938), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1987–1994 Umwelt, Naturschutz und Reaktorsicherheit
** 1994–1998 Raumordnung, Bauwesen und Städtebau
* [[Jürgen Trittin]] (* 1954), [[Bündnis 90/Die Grünen]]
** 1998–2005 Umwelt, Naturschutz und Reaktorsicherheit

=== V ===
* [[Hans-Jochen Vogel]] (1926–2020), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1972–1974 Raumordnung, Bauwesen und Städtebau
** 1974–1981 Justiz

=== W ===
* [[Theo Waigel]] (* 1939), [[Christlich-Soziale Union in Bayern|CSU]]
** 1989–1998 Finanzen
* [[Walter Wallmann]] (1932–2013), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1986–1987 Umwelt, Naturschutz und Reaktorsicherheit
* [[Hansjoachim Walther]] (1939–2005), [[Deutsche Soziale Union|DSU]]
** 1990–1991 Besondere Aufgaben
* [[Johanna Wanka]] (* 1951), [[Christlich Demokratische Union Deutschlands|CDU]]
** 2013–2018 Bildung und Forschung
* [[Jürgen Warnke]] (1932–2013), [[Christlich-Soziale Union in Bayern|CSU]]
** 1982–1987 Wirtschaftliche Zusammenarbeit
** 1987–1989 Verkehr
** 1989–1991 Wirtschaftliche Zusammenarbeit
* [[Karl Weber (Politiker, 1898)|Karl Weber]] (1898–1985), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1965 Justiz
* [[Herbert Wehner]] (1906–1990), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1966–1969 Gesamtdeutsche Fragen
* [[Guido Westerwelle]] (1961–2016), [[Freie Demokratische Partei|FDP]]
** 2009–2013 Auswärtiges
** 2009–2011 Stellvertreter der Bundeskanzlerin
* [[Heinz Westphal]] (1924–1998), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1982 Arbeit und Sozialordnung
* [[Ludger Westrick]] (1894–1990), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1964–1966 Besondere Aufgaben
* [[Heidemarie Wieczorek-Zeul]] (* 1942), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1998–2009 Wirtschaftliche Zusammenarbeit und Entwicklung
* [[Eberhard Wildermuth]] (1890–1952), [[Freie Demokratische Partei|FDP]]
** 1949–1952 Wohnungsbau
* [[Hans Wilhelmi]] (1899–1970), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1960–1961 Wirtschaftlicher Besitz des Bundes
* [[Dorothee Wilms]] (* 1929), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1982–1987 Bildung und Wissenschaft
** 1987–1991 Innerdeutsche Beziehungen
* [[Heinrich Windelen]] (1921–2015), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1969 Vertriebene, Flüchtlinge und Kriegsgeschädigte
** 1983–1987 Innerdeutsche Beziehungen
* [[Hans-Jürgen Wischnewski]] (1922–2005), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 1966–1968 Wirtschaftliche Zusammenarbeit#
* [[Volker Wissing]] (* 1970)
** seit 2021 Digitales und Verkehr
* [[Matthias Wissmann]] (* 1949), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1993 Forschung und Technologie
** 1993–1998 Verkehr
* [[Manfred Wörner]] (1934–1994), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1982–1988 Verteidigung
* [[Franz-Josef Wuermeling]] (1900–1986), [[Christlich Demokratische Union Deutschlands|CDU]]
** 1953–1957 Familienfragen
** 1957–1962 Familien- und Jugendfragen

=== Z ===
* [[Friedrich Zimmermann]] (1925–2012), [[Christlich-Soziale Union in Bayern|CSU]]
** 1982–1989 Inneres
** 1989–1991 Verkehr
* [[Brigitte Zypries]] (* 1953), [[Sozialdemokratische Partei Deutschlands|SPD]]
** 2002–2009 Justiz
** 2017–2018 Wirtschaft und Energie
`

const regex = new RegExp(/\* \[\[[^\]]*\]\]/g)
const malformattedNameList = rawList.match(regex)

const nameList = malformattedNameList.map(preName => preName.substring(4, preName.length - 2).split('|').pop())

const generate = (overlap) => {
    let results = []
    nameList.forEach((leftName) => {
        nameList.forEach((rightName) => {
            let rightLastName = rightName.split(' ').pop()
            var rightSubstring = rightLastName.toLowerCase().substring(0, overlap)
            var leftSubstring = leftName.toLowerCase().substring(leftName.length - overlap, leftName.length)
            if (rightLastName.length > overlap && leftSubstring == rightSubstring) {
                results.push(leftName + rightLastName.substring(overlap))
            }
        })
    })
    return results
}

var length = 2
argv.forEach((arg) => {
    if (/overlap=[0-9]+/.test(arg)) {
        length = arg.split('=')[1]
    }
})

console.log(generate(length))