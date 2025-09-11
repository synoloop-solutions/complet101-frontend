function SafeguardCard() {
    const resources = [
    {
      id: 1,
      name: "Childline",
      description: "Free, confidential support for children and young people in the UK.",
      link: "Visit Childline",
      url: "#"
    },
    {
      id: 2,
      name: "The Mix",
      description: "Support and guidance for young people aged 13-25 on mental health, relationships, and more.",
      link: "Visit The Mix",
      url: "#"
    },
    {
      id: 3,
      name: "YoungMinds",
      description: "Information and support for young people's mental health and wellbeing.",
      link: "Visit YoungMinds",
      url: "#"
    },
    {
      id: 4,
      name: "Kooth",
      description: "Free, safe and anonymous online mental wellbeing community for young people.",
      link: "Visit Kooth",
      url: "#"
    },
    {
      id: 5,
      name: "Bullying UK",
      description: "Advice and support for young people affected by bullying.",
      link: "Visit Bullying UK",
      url: "#"
    },
    {
      id: 6,
      name: "NSPCC",
      description: "Working to protect children across the UK. Information and advice for children and adults.",
      link: "Visit NSPCC",
      url: "#"
    }
  ];
  return (
    <>
    <div className="mt-8 sm:mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">
                {resource.name}
              </h3>
              <svg
                className="w-4 h-4 text-gray-400 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              {resource.description}
            </p>
            <a
              href={resource.url}
              className="text-blue-600 text-sm font-medium hover:text-blue-700"
            >
              {resource.link}
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default SafeguardCard;
