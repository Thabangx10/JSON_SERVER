document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("tbody");

  // Fetch function
  fetch("/db.json")
      .then((res) => res.json())
      .then((json) => {
          json.user.forEach((data) => {
              tbody.append(createTableRow(data));
          });
      })
      .catch((error) => {
          console.log("Error fetching data:", error);
      });

  // Create table row
  function createTableRow({ profile, name, email, status, role }) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                      <img src="${profile}" class="h-10 w-10 rounded-full" alt="">
                  </div>
                  <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">${name}</div>
                      <div class="text-sm text-gray-500">${email}</div>
                  </div>
              </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  ${status}
              </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
              <span class="text-sm text-gray-500">${role}</span>
          </td>
      `;
      return tr;
  }
});
