import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Calendar, Video, MessageSquare, TrendingUp } from "lucide-react";
import Card from "../components/ui/Card";
import LoadingSpinner from "../components/ui/LoadingSpinner";

interface Event {
  _id: string;
  title: string;
  date: string;
  category: string;
  published: boolean;
}

interface Sermon {
  _id: string;
  title: string;
  date: string;
  speaker: string;
  published: boolean;
  featured: boolean;
}

interface Testimonial {
  _id: string;
  featured: boolean;
}

export default function Dashboard() {
  const events = useQuery(api.events.getEvents) || [];
  const sermons = useQuery(api.sermons.getSermons) || [];
  const testimonials = useQuery(api.testimonials.getTestimonials) || [];

  const stats = [
    {
      name: "Total Events",
      value: events?.length || 0,
      icon: Calendar,
      color: "bg-blue-500",
    },
    {
      name: "Sermons",
      value: sermons?.length || 0,
      icon: Video,
      color: "bg-primary",
    },
    {
      name: "Testimonials",
      value: testimonials?.length || 0,
      icon: MessageSquare,
      color: "bg-accent",
    },
    {
      name: "Total Items",
      value:
        (events?.length || 0) +
        (sermons?.length || 0) +
        (testimonials?.length || 0),
      icon: TrendingUp,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back!</h1>
        <p className="text-gray-600 mt-1">
          Here's what's happening with your church website
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </p>
              </div>
              <div
                className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Stats Info */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Content Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">Published Events</p>
            <p className="text-2xl font-bold text-primary">
              {(events as Event[])?.filter((e) => e.published).length || 0}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Published Sermons</p>
            <p className="text-2xl font-bold text-primary">
              {(sermons as Sermon[])?.filter((s) => s.published).length || 0}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Featured Items</p>
            <p className="text-2xl font-bold text-primary">
              {((sermons as Sermon[])?.filter((s) => s.featured).length || 0) +
                ((testimonials as Testimonial[])?.filter((t) => t.featured)
                  .length || 0)}
            </p>
          </div>
        </div>
      </Card>

      {/* Recent Events */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Events
        </h2>
        {events === undefined ? (
          <div className="py-8 flex justify-center">
            <LoadingSpinner size="sm" />
          </div>
        ) : events && events.length > 0 ? (
          <div className="space-y-3">
            {(events as Event[])
              .slice(-5)
              .reverse()
              .map((event) => (
                <div
                  key={event._id}
                  className="flex items-start space-x-3 pb-3 border-b border-gray-100 last:border-0"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {event.title}
                    </p>
                    <p className="text-sm text-gray-600">
                      {new Date(event.date).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {event.category}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No events yet</p>
        )}
      </Card>

      {/* Recent Sermons */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Sermons
        </h2>
        {sermons === undefined ? (
          <div className="py-8 flex justify-center">
            <LoadingSpinner size="sm" />
          </div>
        ) : sermons && sermons.length > 0 ? (
          <div className="space-y-3">
            {(sermons as Sermon[])
              .slice(-5)
              .reverse()
              .map((sermon) => (
                <div
                  key={sermon._id}
                  className="flex items-start space-x-3 pb-3 border-b border-gray-100 last:border-0"
                >
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {sermon.title}
                    </p>
                    <p className="text-sm text-gray-600">{sermon.speaker}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(sermon.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No sermons yet</p>
        )}
      </Card>
    </div>
  );
}
